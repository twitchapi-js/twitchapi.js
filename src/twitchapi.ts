import {EventEmitter} from "node:events";
import {events} from "./events";
import {WebSocket} from "ws";
export *  from "./utils/intents";
import {SocketManager} from "./sockets/socketManager";
import {BetaEvents} from "./betaEvents";
import {Ready} from "./client/ready";

const client = new WebSocket("wss://eventsub-beta.wss.twitch.tv/ws");


export declare interface twitchapi {
    on<U extends keyof events>(event: string, listener: events[U]): this;
    on<U extends keyof BetaEvents>(event: string, listener: BetaEvents[U]): this;
    emit<U extends keyof events>(event: U, ...args: Parameters<events[U]>): boolean;
}



export class twitchapi extends EventEmitter{
    public sessionId;
    public intents;

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.intents = props.intents
    }

    /**
     * create connection into twitch using your token
     * @param option
     */
    login(option: {token: string, clientId: string, userId: string}){
        client.on("open", open=>{
           this.emit("open", open)
        })
        client.on("message", async (data) =>{
            const parseData = JSON.parse(data.toString());
            if (parseData.metadata.message_type === "session_welcome") {
                this.sessionId = parseData.payload.session.id;
                let socketManager = new SocketManager({intents: this.intents, token: option.token, clientId: option.clientId, userId: option.userId, sessionId: this.sessionId})
                await socketManager.connectToEvents();
                this.emit("ready", Ready)
            }else if (parseData.metadata.message_type === "notification") {
                this.emit(parseData.metadata.subscription_type, parseData);
            }
        })
    }

}

import {EventEmitter} from "node:events";
import {events} from "./events";
import {WebSocket} from "ws";
import {SocketManager} from "./sockets/socketManager";
import websocke from "websocket";
import {ChatManager} from "./sockets/chat/chatManager";

const client = new WebSocket("wss://eventsub-beta.wss.twitch.tv/ws");

export declare interface twitchapi {
    on<U extends keyof events>(event: string, listener: events[U]): this;
    emit<U extends keyof events>(event: U, ...args: Parameters<events[U]>): boolean;
}

export class twitchapi extends EventEmitter {
    public sessionId;
    public intents;
    public chatClient;
    public QauthToken;
    public chatbot;
    /**
     *
     * @param props
     */
    constructor(props: { intents: Array<any>, chatbot: boolean}) {
        super();
        this.intents = props.intents;
        this.chatbot = props.chatbot;
    }

    /**
     * create connection into twitch using your token
     * @param option
     */
    login(option: { token: string, clientId: string, userId: string }) {
        client.on("open", open => {
            this.emit("open", open)
        })
        client.on("message", async (data) => {
            const parseData = JSON.parse(data.toString());
            if (parseData.metadata.message_type === "session_welcome") {
                this.sessionId = parseData.payload.session.id;
                let socketManager = new SocketManager({
                    intents: this.intents,
                    token: option.token,
                    clientId: option.clientId,
                    userId: option.userId,
                    sessionId: this.sessionId,
                    twitchapi: this,
                })
                socketManager.connectToEvents().then(() => {
                    console.log("Connect into server")
                });
            } else {
                this.emit(parseData.metadata.subscription_type, parseData);
            }
        })
        if (this.chatbot){
            this.connectIntoChat(option.token);
        }
    }
    connectIntoChat(token: string){
        this.chatClient =  new websocke.client();
        this.chatClient.on("connect",  (connection)=> {
            connection.sendUTF('CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands');
            connection.sendUTF('PASS oauth:' + token);
            connection.sendUTF('NICK royaljacquess');
            connection.sendUTF('JOIN #royaljacquess');
            let chat = new ChatManager();

        })
        this.chatClient.connect("ws://irc-ws.chat.twitch.tv:80")
    }
}



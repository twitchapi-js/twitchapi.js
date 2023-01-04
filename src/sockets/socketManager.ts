import {AddToSocketViewer} from "./eventsub/addToSocketViewer";
export class SocketManager{

    private intents: Array<any>;
    public sessionId;
    public token;
    public clientId;
    public userId;

    /**
     *
     * @param props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}
     */
    constructor(props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}) {
        this.sessionId = props.sessionId;
        this.token = props.token;
        this.clientId = props.clientId;
        this.userId = props.userId;
        this.intents = props.intents;
    }

    /**
     * @private
     * connect into event by socket
     */
    async connectToEvents(){
        let props = {token: this.token, userId: this.userId, clientId: this.clientId, sessionId: this.sessionId};
        let addSocketViewerClass = new AddToSocketViewer(props);
        this.intents.forEach(intents => {
            addSocketViewerClass.connectIntoSocket(intents);
        })

    }
}

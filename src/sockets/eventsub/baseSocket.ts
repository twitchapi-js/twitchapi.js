export class BaseSocket{
    public sessionId;
    public token;
    public clientId;
    public userId;
    /**
     * base of many events
     */
    constructor(props: {sessionId: string, token: string, clientId: string, userId: string}) {
        this.sessionId = props.sessionId;
        this.token = props.token;
        this.clientId = props.clientId;
        this.userId = props.userId;
    }

}

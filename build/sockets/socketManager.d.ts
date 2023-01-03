export declare class SocketManager {
    private intents;
    sessionId: any;
    token: any;
    clientId: any;
    userId: any;
    /**
     *
     * @param props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}
     */
    constructor(props: {
        intents: Array<any>;
        token: string;
        clientId: string;
        userId: string;
        sessionId: string;
    });
    /**
     * @private
     * connect into event by socket
     */
    connectToEvents(): void;
}

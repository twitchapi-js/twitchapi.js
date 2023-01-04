import { twitchapi } from "../twitchapi";
export declare class SocketManager {
    private intents;
    sessionId: any;
    token: any;
    clientId: any;
    userId: any;
    twitchApi: twitchapi;
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
        twitchapi: twitchapi;
    });
    /**
     * @private
     * connect into event by socket
     */
    connectToEvents(): Promise<void>;
}

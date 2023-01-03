export declare class BaseSocket {
    sessionId: any;
    token: any;
    clientId: any;
    userId: any;
    /**
     * base of many events
     */
    constructor(props: {
        sessionId: string;
        token: string;
        clientId: string;
        userId: string;
    });
}

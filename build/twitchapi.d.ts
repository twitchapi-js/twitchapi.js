/// <reference types="node" />
import { EventEmitter } from "node:events";
import { events } from "./events";
export declare interface twitchapi {
    on<U extends keyof events>(event: string, listener: events[U]): this;
    emit<U extends keyof events>(event: U, ...args: Parameters<events[U]>): boolean;
}
export declare class twitchapi extends EventEmitter {
    sessionId: any;
    intents: any;
    chatClient: any;
    QauthToken: any;
    chatbot: any;
    /**
     *
     * @param props
     */
    constructor(props: {
        intents: Array<any>;
        chatbot: boolean;
    });
    /**
     * create connection into twitch using your token
     * @param option
     */
    login(option: {
        token: string;
        clientId: string;
        userId: string;
    }): void;
    connectIntoChat(token: string): void;
}

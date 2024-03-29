/// <reference types="node" />
import { EventEmitter } from "node:events";
import { events } from "./events";
export * from "./utils/intents";
import { BetaEvents } from "./betaEvents";
export declare interface twitchapi {
    on<U extends keyof events>(event: string, listener: events[U]): this;
    on<U extends keyof BetaEvents>(event: string, listener: BetaEvents[U]): this;
    emit<U extends keyof events>(event: U, ...args: Parameters<events[U]>): boolean;
}
export declare class twitchapi extends EventEmitter {
    sessionId: any;
    intents: any;
    /**
     *
     * @param props
     */
    constructor(props: any);
    /**
     * create connection into twitch using your token
     * @param option
     */
    login(option: {
        token: string;
        clientId: string;
        userId: string;
    }): void;
}

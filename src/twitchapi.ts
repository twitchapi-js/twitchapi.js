import {EventEmitter} from "node:events";
import {WebSocket} from "ws";
import {loginProps, mainClassProps} from "./props";
import Debuger from "./util/debuger";

const inDev = true;
export class twitchapi extends EventEmitter{

    constructor(props: mainClassProps) {
        super();
        new Debuger({active: inDev})
    }
    async login(props: loginProps){
        Debuger.info("start connection");
        Debuger.warn("start connection");
        Debuger.error("start connection");
    }
}

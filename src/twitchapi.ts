import {EventEmitter} from "node:events";

import {loginProps, mainClassProps} from "./props";
import Debuger from "./util/debuger";

const inDev = true;

export * from "./util/Intents"
export class twitchapi extends EventEmitter{

    constructor(props: mainClassProps) {
        super();
        new Debuger({active: inDev})
    }
    async login(props: loginProps){
        Debuger.info("start connection");
    }
}

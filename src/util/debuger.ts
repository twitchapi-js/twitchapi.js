export default class Debuger{
    private static active: boolean;
    constructor(props: {active: boolean}) {
        Debuger.active = props.active;
    }
    static info(value){
        if (!Debuger.active)return;
        console.log("[INFO]\n", value)
    }
    static warn(value){
        if (!Debuger.active)return;
        console.warn("[WARN]\n", value)
    }
    static error(value){
        if (!Debuger.active)return;
        console.error("[ERROR]\n", value)
    }
}

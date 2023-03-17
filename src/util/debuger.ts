export default class Debuger{
    constructor(props: {active: boolean}) {

    }
    static info(value){
        console.log("[INFO]\n", value)
    }
    static warn(value){
        console.warn("[WARN]\n", value)
    }
    static error(value){
        console.error("[ERROR]\n", value)
    }
}

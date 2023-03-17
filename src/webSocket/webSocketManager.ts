import {WebSocket} from "ws";

export default class WebSocketManager{
    private client: WebSocket;
    constructor(props) {
        this.client = new WebSocket("wss://eventsub-beta.wss.twitch.tv/ws");
    }
    public functionConnectIntoSocket(){
        
    }
}

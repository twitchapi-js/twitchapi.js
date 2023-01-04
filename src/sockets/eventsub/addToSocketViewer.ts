import {BaseSocket} from "./baseSocket";
import axios from "axios";


export class AddToSocketViewer extends BaseSocket{

    async connectIntoSocket(intent: string){
        try {
            console.log("add " + intent + "websocket")
           await axios.post(
                "https://api.twitch.tv/helix/eventsub/subscriptions",
                {
                    type: intent,
                    version: 1,
                    transport: {
                        method: "websocket",
                        session_id: this.sessionId
                    },
                    condition: {
                        broadcaster_user_id: this.userId
                    },
                    session_id: this.sessionId
                },
                {
                    headers: {
                        Authorization: "Bearer " + this.token,
                        "Client-Id": this.clientId
                    }
                }
            );
        }catch (e){
            console.log(e)
        }
    }
}

import {BaseSocket} from "./baseSocket";
import axios from "axios";
import {Intents} from "../../twitchapi";


export class AddToSocketViewer extends BaseSocket{

    async connectIntoSocket(intent: string){
        try {
            let version = 1;
            if (intent === Intents.ChannelFollow){
                version = 2;
            }
            await axios.post(
                "https://api.twitch.tv/helix/eventsub/subscriptions",
                {
                    type: intent,
                    version: version,
                    transport: {
                        method: "websocket",
                        session_id: this.sessionId
                    },
                    condition: {
                        broadcaster_user_id: this.userId,
                        moderator_user_id: this.userId
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

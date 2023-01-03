import {BaseSocket} from "./baseSocket";
import axios from "axios";

export class ChannelSubscribe extends BaseSocket{
    async addChannelSubscribe(){
        try {
            await axios.post(
                "https://api.twitch.tv/helix/eventsub/subscriptions",
                {
                    type: "channel.subscribe",
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

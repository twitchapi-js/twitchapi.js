import axios from "axios";
import {BaseSocket} from "./baseSocket";
export class CustomRewardRedemption extends BaseSocket{

    async addReward(){
        try {
            await axios.post(
                "https://api.twitch.tv/helix/eventsub/subscriptions",
                {
                    type: "channel.channel_points_custom_reward_redemption.add",
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
        } catch (e) {
            console.log(e)
        }

    }
}

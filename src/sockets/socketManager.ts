import {Intents} from "../utils/intents";
import {CustomRewardRedemption} from './eventsub/subscriptions/customRewardRedemption';
import {ChannelUpdate} from "./eventsub/subscriptions/channelUpdate";
import {ChannelFollow} from "./eventsub/subscriptions/channelFollow";
import {ChannelSubscribe} from "./eventsub/subscriptions/channelSubscribe";
import {ChannelSubscriptionEnd} from "./eventsub/subscriptions/channelSubscriptionEnd";
import {ChannelSubscriptionGift} from "./eventsub/subscriptions/channelSubscriptionGift";
export class SocketManager{

    private intents: Array<any>;
    public sessionId;
    public token;
    public clientId;
    public userId;

    /**
     *
     * @param props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}
     */
    constructor(props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}) {
        this.sessionId = props.sessionId;
        this.token = props.token;
        this.clientId = props.clientId;
        this.userId = props.userId;
        this.intents = props.intents;
    }

    /**
     * @private
     * connect into event by socket
     */
    connectToEvents(){
        let props = {token: this.token, userId: this.userId, clientId: this.clientId, sessionId: this.sessionId};
        this.intents.forEach(intents => {
            switch (intents){
                case Intents.CustomRewardRedemptionAdd:
                    let rewardRedemption = new CustomRewardRedemption(props)
                    rewardRedemption.addReward().then(r => {});
                    break;
                case Intents.ChanneUpdate:
                    let channelUpdateClass = new ChannelUpdate(props)
                    channelUpdateClass.addChannelUpdateEvent().then(e => {});
                    break;
                case Intents.ChannelFollow:
                    let channelFollow = new ChannelFollow(props);
                    channelFollow.addChannelFollow().then(r => {});
                    break;
                case Intents.ChannelSubscribe:
                    let channelsub = new ChannelSubscribe(props);
                    channelsub.addChannelSubscribe().then(r => {})
                    break;
                case Intents.channelSubscriptionEnd:
                    let channelSubEnd = new ChannelSubscriptionEnd(props);
                    channelSubEnd.addChannelSubEnd().then(r => {});
                    break;
                case Intents.channelSubscriptionGift:
                    let channelSubGift = new ChannelSubscriptionGift(props);
                    channelSubGift.addChannelSubGif().then(r => {})
                    break;
            }
        })

    }
}

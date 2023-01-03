/**
 * list of the all event with twitch
 * @interface event
 */
import {ChannelSubscriptionGift} from "./sockets/eventsub/subscriptions/channelSubscriptionGift";
import {ChannelSubscriptionEnd} from "./sockets/eventsub/subscriptions/channelSubscriptionEnd";
import {ChannelSubscribe} from "./sockets/eventsub/subscriptions/channelSubscribe";
import {ChannelFollow} from "./sockets/eventsub/subscriptions/channelFollow";
import {ChannelUpdate} from "./sockets/eventsub/subscriptions/channelUpdate";
import {CustomRewardRedemption} from "./sockets/eventsub/subscriptions/customRewardRedemption";

export declare interface events{
    "channel.channel_points_custom_reward_redemption.add": CustomRewardRedemption;
    "open": any;
    "channel.update": ChannelUpdate;
    "channel.follow": ChannelFollow;
    "channel.subscribe": ChannelSubscribe;
    "channel.subscription.end": ChannelSubscriptionEnd;
    "channel.subscription.gift": ChannelSubscriptionGift
}

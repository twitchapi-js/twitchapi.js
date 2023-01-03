"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
var intents_1 = require("../utils/intents");
var customRewardRedemption_1 = require("./eventsub/subscriptions/customRewardRedemption");
var channelUpdate_1 = require("./eventsub/subscriptions/channelUpdate");
var channelFollow_1 = require("./eventsub/subscriptions/channelFollow");
var channelSubscribe_1 = require("./eventsub/subscriptions/channelSubscribe");
var channelSubscriptionEnd_1 = require("./eventsub/subscriptions/channelSubscriptionEnd");
var channelSubscriptionGift_1 = require("./eventsub/subscriptions/channelSubscriptionGift");
var SocketManager = /** @class */ (function () {
    /**
     *
     * @param props: {intents: Array<any>, token: string, clientId: string, userId: string, sessionId: string}
     */
    function SocketManager(props) {
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
    SocketManager.prototype.connectToEvents = function () {
        var props = { token: this.token, userId: this.userId, clientId: this.clientId, sessionId: this.sessionId };
        this.intents.forEach(function (intents) {
            switch (intents) {
                case intents_1.Intents.CustomRewardRedemptionAdd:
                    var rewardRedemption = new customRewardRedemption_1.CustomRewardRedemption(props);
                    rewardRedemption.addReward().then(function (r) { });
                    break;
                case intents_1.Intents.ChanneUpdate:
                    var channelUpdateClass = new channelUpdate_1.ChannelUpdate(props);
                    channelUpdateClass.addChannelUpdateEvent().then(function (e) { });
                    break;
                case intents_1.Intents.ChannelFollow:
                    var channelFollow = new channelFollow_1.ChannelFollow(props);
                    channelFollow.addChannelFollow().then(function (r) { });
                    break;
                case intents_1.Intents.ChannelSubscribe:
                    var channelsub = new channelSubscribe_1.ChannelSubscribe(props);
                    channelsub.addChannelSubscribe().then(function (r) { });
                    break;
                case intents_1.Intents.channelSubscriptionEnd:
                    var channelSubEnd = new channelSubscriptionEnd_1.ChannelSubscriptionEnd(props);
                    channelSubEnd.addChannelSubEnd().then(function (r) { });
                    break;
                case intents_1.Intents.channelSubscriptionGift:
                    var channelSubGift = new channelSubscriptionGift_1.ChannelSubscriptionGift(props);
                    channelSubGift.addChannelSubGif().then(function (r) { });
                    break;
            }
        });
    };
    return SocketManager;
}());
exports.SocketManager = SocketManager;
//# sourceMappingURL=socketManager.js.map
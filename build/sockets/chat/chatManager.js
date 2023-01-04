"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatManager = void 0;
var ChatManager = /** @class */ (function () {
    function ChatManager() {
    }
    ChatManager.prototype.parseUtf8 = function (message, twitchapi) {
        console.log(JSON.parse(message));
    };
    return ChatManager;
}());
exports.ChatManager = ChatManager;
//# sourceMappingURL=chatManager.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSocket = void 0;
var BaseSocket = /** @class */ (function () {
    /**
     * base of many events
     */
    function BaseSocket(props) {
        this.sessionId = props.sessionId;
        this.token = props.token;
        this.clientId = props.clientId;
        this.userId = props.userId;
    }
    return BaseSocket;
}());
exports.BaseSocket = BaseSocket;
//# sourceMappingURL=baseSocket.js.map
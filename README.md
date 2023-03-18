## twitchapi.js 

`version 2.0.6` full code in [github](https://github.com/twitchapi-js/twitchapi.js) 

remove all commit
twitchapi.js is a node js library written in typescript allowing to read the events of your twitch streams and to interact with them.

the library is currently under development, if you want to contribute, feel free to open a pull request, I will be happy to process it.

### start with twitchapi.js

```js
import {twitchapi, Intents} from "./twitch-api.js/src/twitchapi";
import * as config from "./config.json"

const client = new twitchapi({
    intents: [
        Intents.channelChannelPointsCustomRewardRedemptionAdd
    ]
})

client.login({
    token: config.token,
    clientId: config.clientId,
    userId: config.userId
})
```

### read events

```js
client.on("channel.channel_points_custom_reward_redemption.add", event => {

});
```

## Other

if you need help for start with twitchapi.js, please join this [discord](https://discord.gg/UpNbww77A9)



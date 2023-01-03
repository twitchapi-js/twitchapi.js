## twitchapi.js 

`version 1.0.12` full code in [github](https://github.com/royaljacques/twitch-api.js) 

remove all commit
twitchapi.js is a node js library written in typescript allowing to read the events of your twitch streams and to interact with them.

the library is currently under development, if you want to contribute, feel free to open a pull request, I will be happy to process it.

### start with twitchapi.js

```js
import {twitchapi} from "./twitch-api.js/twitchapi";
import {Intents} from "./twitch-api.js/src/utils/intents";

const client = new twitchapi({
    intents: [Intents.CustomRewardRedemption]
})

client.login({
    token: "",
    clientId: "",
    userId: ""
})
```

### read events

```js
client.on("channel.channel_points_custom_reward_redemption.add", event => {

});
```

## Other

if you need help for start with twitchapi.js, please join this [discord](https://discord.gg/UpNbww77A9)



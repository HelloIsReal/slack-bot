console.log("Hello via Bun!");

import { App } from "@slack/bolt";

const app = new App({
    token: process.env.SLACK_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.message(async(event) => {
    if (event.payload.subtype) return;
    if (event.payload.user !== 'U0ATHP3CRGF') // rip doppel

    await event.say("Yo yo yo");
});

await app.start();
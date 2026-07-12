import { App } from "@slack/bolt";

console.log("started!");
const app = new App({
    token: process.env.SLACK_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.message(async(event) => {
    if (event.payload.subtype) return;
    if (event.payload.user !== 'U0ATHP3CRGF') // rip doppel
    console.log("sent reply!");
    await event.say("Yo yo yo");
});

await app.start();
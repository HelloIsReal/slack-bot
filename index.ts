import { App } from "@slack/bolt";
const jokes: readonly string[] = ["Don't marry me! I don't want you as my wi-fi!","Looks like it might be time for Geto, to get-gone"];
const keywords: string[] = ["joke","humor","humour","funny"];
var chosenJoke=0;


const app = new App({
    token: process.env.SLACK_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});
console.log("started!");
app.message(async ({ message, say}) => {
    if (!("text" in message)) return;
    if (message.user !== "U0ATHP3CRGF") return;

    const text = message.text ?? "";

    if (keywords.some(keyword => text.includes(keyword))) {
    await say("Omg you are a wifi!");
    return;
    } else{
        await say(`You said: ${text}`);
    }
    
});

await app.start();
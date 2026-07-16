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
app.message(async ({event, message, say}) => {
//app.message(async(event, message) => {
    if (event.payload.subtype) return;
    if (event.payload.user !== 'U0ATHP3CRGF') // rip doppel
    console.log("sent reply!");
    //

    var userInput = 'text' in message ? message.text?.toLowerCase(): '';
    if(!userInput) return; // runs if there isn't any input
    var keywordCheck = keywords.find(keyword => userInput.includes(keyword));
    if(keywordCheck){
        await event.say("I don't want want you as my wi-fi!!!");
    }else{
        await event.say("Yo yo yo");
    }


});

await app.start();
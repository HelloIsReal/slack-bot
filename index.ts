#!/usr/bin/env bun
import { App } from "@slack/bolt";
const jokes: readonly string[] = ["Don't marry me! I don't want you as my Wi-Fi!","Looks like it might be time for Geto, to get-gone"];
const keywords: string[] = ["joke","humor","humour","funny"];
const greetings: string[] = ["hey","yo","wassup","hello","hi","sup"]
var chosenJoke=0;
var chosenGreeting=0;


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
    if (text.toLowerCase().includes("takaba")){
        if (keywords.some(keyword => text.includes(keyword))) {
            chosenJoke = Math.floor(Math.random() * jokes.length);
            var joke = jokes[chosenJoke];
            if (joke){
                await say(joke);
            }
            return;
        }else if(greetings.some(greeting => text.includes(greeting))){
            chosenGreeting = Math.floor(Math.random() * greetings.length);
            var greeting = greetings[chosenGreeting];
            if (greeting){
                await say(greeting+", "+message.user);
            }
        } else{
            await say(`You said: ${text}`);
            return;
            }
    }

    
    
});

await app.start();
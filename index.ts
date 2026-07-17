#!/usr/bin/env bun
import { App } from "@slack/bolt";
const jokes: readonly string[] = ["Don't marry me! I don't want you as my Wi-Fi!","Looks like it might be time for Geto, to get-gone"];
const keywords: string[] = ["joke","humor","humour","funny","jokes"];
const greetings: string[] = ["hey","yo","wassup","hello","hi","sup"]
const opinions: string[] = ["Ding ding ding, we have a winner!!!", "It's so fantastic it should be illegal!",
    "HA HA HA HA... No... If that idea was a restaurant, I'd ask for the bill before the food arrived!"
    ,"Nope! My panel of judges have reviewed your idea, and have all decided to throw rotten tomatoes!"]
const askOpinionKeywords: string[] = ["do you think","do you approve","do you agree","do you disagree","is it"]


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
            var joke = jokes[Math.floor(Math.random() * jokes.length)];
            if (joke){
                await say(joke);
            }
            return;
            } else if(askOpinionKeywords.some(opinionKeyword => text.includes(opinionKeyword))){
            var opinion = opinions[Math.floor(Math.random() * opinions.length)]
            if(opinion){
                await say(opinion);
            }
            return;
        //}else if(){
        }else if(greetings.some(greeting => text.includes(greeting))){
            var greeting = greetings[Math.floor(Math.random() * greetings.length)];
            if (greeting){
                await say(greeting+", <@"+message.user+">");
            }
            return;
        }
        // } else{
        //     await say(`You said: ${text}`);
        //     return;
        //     }
    }

    
    
});

await app.start();
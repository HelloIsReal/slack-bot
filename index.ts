#!/usr/bin/env bun
import { App } from "@slack/bolt";
const jokes: readonly string[] = ["Don't marry me! I don't want you as my Wi-Fi!","Looks like it might be time for Geto, to get-gone"
    ,"If I can't beat you, Joe will...","Why do birds fly south during winter?... Because it's too far to walk!"
    ,"Why do flamingo's only stand on one leg? Because they'd fall if they lifted the other one!","What does a fish with no eyes sound like... Fshhhhhh"
    ,"What do you call cheese that isn't yours.... Na-cho Cheese"];
const keywords: string[] = ["joke","humor","humour","funny","jokes","laugh"];
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
        if (text.includes("who") && text.includes("joe") && !text.includes("mama")){
            await say("JOE MAMA, ha gottem");
            return;
        }
        if (keywords.some(keyword => text.toLowerCase().includes(keyword))) {
            var joke = jokes[Math.floor(Math.random() * jokes.length)];
            if (joke){
                await say(joke);
            }
            return;
            } else if(askOpinionKeywords.some(opinionKeyword => text.toLowerCase().includes(opinionKeyword))){
            var opinion = opinions[Math.floor(Math.random() * opinions.length)]
            if(opinion){
                await say(opinion);
            }
            return;
        //}else if(){
        }else if(greetings.some(greeting => text.toLowerCase().includes(greeting))){
            var greeting = greetings[Math.floor(Math.random() * greetings.length)];
            if (greeting){
                await say(greeting+", <@"+message.user+">");
            }
            return;
        }else{
            await say(`You said "${text}", What do you want?`);
            return;    
        }
        // } else{
        //     await say(`You said: ${text}`);
        //     return;
        //     }
    }

    
    
});

await app.start();
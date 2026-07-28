# Takaba-bot

THIS.... IS TAKABA BOT!
First and first most... He doesn't want you as his Wi-Fi!!!! (ok kinda corny but :sob:)

Takaba is a slackbot built to ease tension and create comedy!

If you want to talk to him, first mention his name, then you can do the following

- Greet takaba!
- Ask him to say a joke
- Ask him his opinions on stuff! (I recommend not asking anything controversial :D )


Hackatime! (https://hackatime.hackclub.com/@Tishar/project/slack-bot)
Github! (https://github.com/HelloIsReal/slack-bot)


# Takaba-bot Download instructions

### Step 1, Downloading Bun
To run this bot, first you'll need runtime for the bot. you can download Bun here, which is what the bot runs on
[Bun download](https://bun.com)

### Step 2, Slack app creation
Next, you're going to make the app for the bot! this'll allow the bot to appear and work on slack
[Slack api page](https://api.slack.com/apps)

click on create app, then from scratch. give it a name, then choose the workspace.

next, go to oauth & permissions, then scroll down to bot token scopes. In that section, add the permissions "channels:read" and "chat:write". Then scroll up on the same page, and then click install to "workspace" (workspace should instead say your chosen workspace)

after installing the app to your chosen workplace, you should get a bot token. DO NOT SHARE THIS!!. This token gives the permissions to allow and control your bot!

in the slackbot, create a new file called ".env", and in that file, type in "SLACK_TOKEN =" (without the quotation marks). Then paste your new bot token to it!

Next on the left tab, click on socket mode, and enable it. It will prompt you to make a app level token. You can name it anything as it doesn't matter. Doing that should give you another token. Go to your .env file again and create a new line. type in "SLACK_APP_TOKEN = ", and add your new token to it.

finally, go go the event subscriptions tab on the left, and enable events. on the same page, scroll down to the "subscribe to bot events" section. then add "message.channels". After doing that, you should get a yellow popup at the top prompting you to reinstall the app. make sure to do that (can also click the install to workspace button from earlier if the popup didn't appear)

### Step 3, Running the bot
To install and run the bot run this in terminal

```bash
bunx takaba-bot 
```
Make sure your .env file is in the same folder as the bot!

One more thing you need to do before running the bot is to give your slack ID to the bot. This is to make sure the bot only talks to you

Go to the .env file, then at the bottom, add "USER_ID: ", followed by your slack ID!

In the workspace, ping the bot in your channel of choice to add the bot to it.

To run the bot, run this in the terminal of the IDE you're using


```bash
bun run index.ts
```

if you did it all right, Takaba-bot should be up and running!

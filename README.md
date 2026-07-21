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
To install dependencies:

### Step 1, Downloading Bun
to run this bot, first you'll need runtime for the bot. you can download Bun here, which is what the bot runs on
[Bun download](https://bun.com)

### Step 2, Slack app creation
Next, you're going to make the app for the bot! this'll allow the bot to appear and work on slack
[Slack api page](https://api.slack.com/apps)

click on create app, then from scratch. give it a name, then choose the workspace.

next, go to oauth & permissions, then scroll down to bot token scopes. In that section, add the permissions "channels:read" and "chat:write". Then scroll up on the same page, and then click install to "workspace" (workspace should instead say your chosen workspace)

after installing the app to your chosen workplace, you should get a bot token. DO NOT SHARE THIS!!. This token gives the permissions to allow and control your bot!

in the slackbot, create a new file called ".env", and in that file, type in "SLACK_TOKEN =" (without the quotation marks). Then paste your new bot token to it!









To run the bot, run this in the terminal of the IDE you're using

```bash
bun run index.ts
```

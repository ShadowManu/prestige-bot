# prestige-bot
Telegram Bot for Prestige

## Install instructions

> *Requires node and npm/yarn*

```
git clone https://github.com/ShadowManu/prestige-bot.git
cd prestige-bot
npm install # or yarn
echo "TELEGRAM_TOKEN=<your telegram token here>" > .env
npm start # or yarn start
```

## Quick reload

There is nodemon configuration, meaning you can run `npm run start:watch` (or `yarn start:watch`) and the server will reload automatically on source changes.
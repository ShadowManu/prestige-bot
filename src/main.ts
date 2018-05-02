import { TELEGRAM_TOKEN } from './config';
import { createConnection } from 'typeorm';

import * as Tg from 'node-telegram-bot-api';

import * as c from './commands';

async function bootstrap() {
  await createConnection();

  const bot = new Tg(TELEGRAM_TOKEN, { polling: true });

  // Add all event listeners
  bot.onText(c.HELP_REGEX, async msg => c.help(bot, msg));
  bot.onText(c.ISSUES_REGEX, async msg => c.respondIssues(bot, msg));
  bot.onText(c.LIST_REGEX, async msg => c.listPrestige(bot, msg));
  bot.onText(c.RECORD_REGEX, async msg => c.recordMessage(bot, msg));
  bot.onText(c.REGISTER_REGEX, async msg => c.registerUser(bot, msg, true));
  bot.onText(c.SEND_REGEX, async(msg, match) => c.sendPrestige(bot, msg, match!));
  bot.onText(c.SHOW_REGEX, async msg => c.showPrestige(bot, msg));

  // Logs unhandled errors to standard error
  process.on('unhandledRejection', (err, promise) => {
    // tslint:disable:no-console
    console.error('Unhandled rejection at:', new Date());
    console.error('promise: ', promise);
    console.error('reason: ', err);
    // tslint:enable
  });
}

bootstrap()
.catch(e => {
  // tslint:disable:no-console
  console.error('Application bootstrap failed.');
  console.error(e);
});

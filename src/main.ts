import { TELEGRAM_TOKEN } from './config';
import { createConnection } from 'typeorm';

import * as Tg from 'node-telegram-bot-api';

import * as c from './commands';

async function bootstrap() {
  await createConnection();

  const bot = new Tg(TELEGRAM_TOKEN, { polling: true });

  // Add all event listeners
  bot.onText(c.REGISTER_REGEX, msg => c.registerUser(bot, msg));
}

bootstrap();

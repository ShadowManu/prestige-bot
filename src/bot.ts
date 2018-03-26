import * as Tg from 'node-telegram-bot-api';

import { UserRepo, TELEGRAM_TOKEN, BASE_PRESTIGE } from './config';

const REGISTER_REGEX = /^\/prestigeregister$/;

export function registerBot() {
  const bot = new Tg(TELEGRAM_TOKEN, { polling: true });

  // Register Command
  bot.onText(REGISTER_REGEX, async (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from!.username!;

    const exists = await assertUser(username);

    const response = exists ?
      `@${username}, you are already registered.` :
      `@${username}, you have been registered sucessfully.`;

    await bot.sendMessage(chatId, response);
  });
}

/** Ensures an user exists. Returns boolean of whether it already exists. */
async function assertUser(username: string): Promise<boolean> {
  const existing = await UserRepo.findOneById(username);
  if (existing) return true;

  await UserRepo.save({ username, prestige: BASE_PRESTIGE });
  return false;
}
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

import { User } from '../entity';

const BASE_PRESTIGE = 50;

export const REGISTER_REGEX = /^\/register@TheRealPrestigeBot$/;

export async function registerUser(bot: Tg, msg: Tg.Message) {
  const chatId = msg.chat.id;
  const username = msg.from!.username!;

  const existing = await getRepository(User).findOneById(username);
  
  let message: string;

  if (existing) {
    message =`@${username}, you are already registered.`;

  } else {
    await getRepository(User).save({ username, prestige: BASE_PRESTIGE });
    message = `@${username}, you have been registered sucessfully.`;
  }

  await bot.sendMessage(chatId, message);
}
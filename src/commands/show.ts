import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

import { User } from '../entity';

export const SHOW_REGEX = /^\/showprestige$/;

export async function showPrestige(bot: Tg, msg: Tg.Message) {
  const chatId = msg.chat.id;
  const username = msg.from!.username!;

  const user = await getRepository(User).findOneById(username);

  if (user) {
    const prestige = user.prestige;
    const message = `@${username}, you have <b>${prestige} PrestigeCoins</b>™`;
    await bot.sendMessage(chatId, message, { parse_mode: 'html'});

  } else {
    const message = `User @${username} is not registered.`;
    await bot.sendMessage(chatId, message);
  }
  
}
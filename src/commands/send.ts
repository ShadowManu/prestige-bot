import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';
import { isNil } from 'lodash';

import { User } from '../entity';

export const SEND_REGEX = /^\/send@TheRealPrestigeBot @(\S+) (\d+)$/;

export async function sendPrestige(bot: Tg, msg: Tg.Message, match: RegExpExecArray) {
  const chatId = msg.chat.id;
  const fromUsername = msg.from!.username!;

  // tslint:disable:no-magic-numbers
  const toUsername = match[1];
  const quantity = +match[2];
  // tslint:enable

  const frm = await getRepository(User).findOneById(fromUsername);
  const to = await getRepository(User).findOneById(toUsername);

  if (fromUsername === toUsername) {
    await bot.sendMessage(chatId, `Don't send yourself prestige @${fromUsername}, you dickhead.`);
    return;
  }

  if (isNil(frm)) {
    await bot.sendMessage(chatId, `You are not registered.`);
    return;
  }

  if (isNil(to)) {
    await bot.sendMessage(chatId, `User ${toUsername} is not registered.`);
    return;
  }

  if (frm.prestige < quantity) {
    await bot.sendMessage(chatId, `You do not have enough prestige.`);
    return;
  }

  const fromPrestige = frm.prestige - quantity;
  const toPrestige = to.prestige + quantity;

  await getRepository(User).save({ username: fromUsername, prestige: fromPrestige });
  await getRepository(User).save({ username: toUsername, prestige: toPrestige });

  await bot.sendMessage(chatId, [
    `User ${fromUsername} now has ${fromPrestige},`,
    `and user ${toUsername} now has ${toPrestige}`
  ].join(' '));
}

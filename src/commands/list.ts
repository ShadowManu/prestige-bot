import * as dedent from 'dedent';
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

import { User } from '../entity';

export const LIST_REGEX = /^\/list@TheRealPrestigeBot$/;

export async function listPrestige(bot: Tg, msg: Tg.Message) {
  const chatId = msg.chat.id;

  const users = await getRepository(User).find({ order: { prestige: 'DESC' } });

  const message = dedent`
    Users by prestige:
    ${users.map(u => `- <b>${u.username}</b>: ${u.prestige}`).join('\n')}
  `;

  await bot.sendMessage(chatId, message, { parse_mode: 'html' });
}

import * as dedent from 'dedent';
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

import { User } from '../entity';
import { referUser } from '../helpers';
import { registerUser } from './register';

export const LIST_REGEX = /^\/list@TheRealPrestigeBot$/;

export async function listPrestige(bot: Tg, msg: Tg.Message) {
  await registerUser(bot, msg, false);
  const users = await getRepository(User).find({ order: { prestige: 'DESC' } });

  const message = dedent`
    Users by prestige:
    ${users.map(u => `- <b>${referUser(u, false)}</b>: ${u.prestige}`).join('\n')}
  `;

  await bot.sendMessage(msg.chat.id, message, { parse_mode: 'html' });
}

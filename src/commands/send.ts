import * as dedent from 'dedent';
import * as Tg from 'node-telegram-bot-api';
import { toNumber } from 'lodash';
import { getRepository } from 'typeorm';

import { User } from '../entity';
import { referUser, PRESTIGE_SYMBOL as PS } from '../helpers';
import { registerUser } from './register';

export const SEND_REGEX = /^\/send@TheRealPrestigeBot @(\S+) (\d+)$/;

export async function sendPrestige(bot: Tg, msg: Tg.Message, match: RegExpExecArray) {
  async function send(message: string, opts?: Tg.SendMessageOptions) {
    return bot.sendMessage(msg.chat.id, message, opts);
  }

  // tslint:disable:no-magic-numbers
  const username = match[1];
  const quantity = toNumber(match[2]) || 0;
  // tslint:enable

  const frm = await registerUser(bot, msg, false);
  const to = await getRepository(User).findOne({ username });

  // Verify all conditions for failure
  if (!frm) return send(`You are not registered.`);
  if (!to) return send(`Couldn't find ${username} in the system.`);
  if (frm.id === to.id) return send(`Don't send yourself prestige ${referUser(frm)}, you dickhead.`);
  if (quantity <= 0) return send(`You can only send positive quantities, ${referUser(frm)}.`);
  if (frm.prestige < quantity) return send(`You do not have enough prestige, ${referUser(frm)}.`);

  const fromPrestige = frm.prestige - quantity;
  const toPrestige = to.prestige + quantity;

  await getRepository(User).save({ id: frm.id, prestige: fromPrestige });
  await getRepository(User).save({ id: to.id, prestige: toPrestige });

  return send(dedent`
    ${referUser(frm)} (\u2b06${fromPrestige}️)
        has gifted <b>${quantity} ${PS}</b> to
    ${referUser(to)} (\u2b07${toPrestige})
  `, { parse_mode: 'html' });
}

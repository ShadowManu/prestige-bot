import * as dedent from 'dedent';
import * as Tg from 'node-telegram-bot-api';
import { isNil } from 'lodash';

import { referUser, PRESTIGE_SYMBOL } from '../helpers';
import { registerUser } from './register';

export const SHOW_REGEX = /^\/show@TheRealPrestigeBot$/;

export async function showPrestige(bot: Tg, msg: Tg.Message) {
  async function send(message: string, opts?: Tg.SendMessageOptions) {
    return bot.sendMessage(msg.chat.id, message, opts);
  }

  const user = await registerUser(bot, msg, false);

  if (isNil(user)) return send(dedent`
    Couldn't find or auto-register user.
    Contact the developers if you think that's an error.`
  );

  return send(`${referUser(user)}, you have <b>${user.prestige} ${PRESTIGE_SYMBOL}</b>`, { parse_mode: 'html' });
}

import * as dedent from 'dedent';
import * as Tg from 'node-telegram-bot-api';

import { registerUser } from './register';

export const HELP_REGEX = /^\/help@TheRealPrestigeBot$/;

export async function help(bot: Tg, msg: Tg.Message) {
  await registerUser(bot, msg, false);

  const chatId = msg.chat.id;
  const message = dedent`
    <b>Commands</b>
    <b>/list</b> : shows all user prestiges.
    <b>/register</b> : registers yourself (generally done automatically).
    <b>/send</b> <i>user</i> <i>amount</i> : transfers prestige to user.
    <b>/show</b> : shows your own prestige.
  `;
  await bot.sendMessage(chatId, message, { parse_mode: 'html' });
}

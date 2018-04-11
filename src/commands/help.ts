import * as dedent from 'dedent';
import * as Tg from 'node-telegram-bot-api';

import { registerUser } from './register';

export const HELP_REGEX = /^\/help@TheRealPrestigeBot$/;

export async function help(bot: Tg, msg: Tg.Message) {
  await registerUser(bot, msg, false);

  const chatId = msg.chat.id;
  const message = dedent`
    <b>Commands</b>
    <b>/help</b>: shows this message.
    <b>/register</b>: registers yourself (generally done automatically).
    <b>/show</b>: shows your own prestige.
    <b>/list</b>: shows all user prestiges.
    <b>/send</b> <i>user</i> <i>amount</i>: transfers prestige to user.
  `;
  await bot.sendMessage(chatId, message, { parse_mode: 'html' });
}

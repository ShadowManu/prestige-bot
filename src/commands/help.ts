import * as dedent from 'dedent';
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

export const HELP_REGEX = /^\/help@TheRealPrestigeBot$/;

export async function help(bot: Tg, msg: Tg.Message) {

    const chatId = msg.chat.id;
    const message = dedent`
        <b>Commands</b>
        <b>/list</b> : shows all user's current amount of prestige.
        <b>/register</b> : it register yourself.
        <b>/send</b> USER AMOUNT : it transfers the specified amount to the user.
        <b>/show</b> : shows your amount of prestige.
    `;
    await bot.sendMessage(chatId, message, { parse_mode: 'html'});
}

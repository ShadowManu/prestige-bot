import * as dedent from 'dedent';
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

export const HELP_REGEX = /^\/help$/;

export async function help(bot: Tg, msg: Tg.Message) {

    const chatId = msg.chat.id;
    const message = dedent`
        <b>Commands</b>
        <b>/listprestige</b> : shows all user's current amount of prestige.
        <b>/prestigeregister</b> : it register yourself.
        <b>/sendprestige</b> USER AMOUNT : it transfers the specified amount to the user.
        <b>/showprestige</b> : shows the your amount of prestige.
    `;
    await bot.sendMessage(chatId, message, { parse_mode: 'html'});
}

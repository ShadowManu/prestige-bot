import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';

import { User } from '../entity';

export const HELP_REGEX = /^\/help$/;

export async function help(bot: Tg) {

    const message = `Commands:\n
					<b>/sendprestige</b> [user, int] : it transfer the specified amount of prestige to the user\n
					<b>/prestigeregister</b> : it register a user to the prestige system\n
					<b>/showprestige</b> : shows the user's current amount of prestige\n
					<b>/listprestige</b> : shows all user's current amount of prestige\n`;
    await bot.sendMessage(chatId, message, { parse_mode: 'html'});

  }
  
}
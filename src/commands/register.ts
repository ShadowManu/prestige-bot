import * as dedent from 'dedent';
import { getRepository } from 'typeorm';
import * as Tg from 'node-telegram-bot-api';
import { isNil } from 'lodash';

import { User } from '../entity';
import { referUser } from '../helpers';

const BASE_PRESTIGE = 50;

export const REGISTER_REGEX = /^\/register@TheRealPrestigeBot$/;

export async function registerUser(bot: Tg, msg: Tg.Message, interactive: boolean): Promise<User | undefined> {
  async function send(message: string) { return bot.sendMessage(msg.chat.id, message); }

  if (isNil(msg.from)) {
    if (interactive) await send(dedent`
      Couldn't register user as the message doesn't have a sender.
      Contact the developers if you think that's an error.`
    );
    return undefined;
  }

  const id = msg.from.id;
  const username = msg.from.username;

  const existing = await getRepository(User).findOneById(id);

  // New user
  if (isNil(existing)) {
    const incoming = await getRepository(User).save({ id, username, prestige: BASE_PRESTIGE });
    if (interactive) await send(`${referUser(incoming)}, welcome to the one and only, TheRealPrestigeBot.`);
    return incoming;

  // Existing user
  } else  {
    if (interactive) await send(`${referUser(existing)}, we already track you, don't worry ;).`);
    return existing;
  }
}

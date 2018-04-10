import * as Tg from 'node-telegram-bot-api';

import { toString } from 'lodash';

import { User } from './entity';

export const PRESTIGE_SYMBOL = 'PrestigeCoins™';

export function referTgUser(user: Tg.User): string {
  return (user.username && `@${user.username}`) || user.first_name || toString(user.id);
}

export function referUser(user: User, mention = true): string {
  return (user.username && `${mention && '@'}${user.username}`) ||  toString(user.id);
}

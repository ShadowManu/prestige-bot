import * as Tg from 'node-telegram-bot-api';

import { toString } from 'lodash';

import { User } from './entity';

export const SYMBOLS = {
  PRESTIGE: 'PrestigeCoins™',
  UP_ARROW: '\u{2b06}',
  DOWN_ARROW: '\u{2b07}'
};

export function referUser(user: User, mention = true): string {
  if (user.username)
    return mention ? `@${user.username}` : user.username;

  return toString(user.id);
}

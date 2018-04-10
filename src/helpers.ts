import * as Tg from 'node-telegram-bot-api';

import { toString } from 'lodash';

import { User } from './entity';

export function referTgUser(user: Tg.User): string {
  return (user.username && `@${user.username}`) || user.first_name || toString(user.id);
}

export function referUser(user: User): string {
  return (user.username && `@${user.username}`) ||  toString(user.id);
}

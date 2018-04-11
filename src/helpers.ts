import { isNil, toString } from 'lodash';

import { User } from './entity';

export const SYMBOLS = {
  PRESTIGE: 'PrestigeCoins™',
  UP_ARROW: '\u{2b06}',
  DOWN_ARROW: '\u{2b07}'
};

export function referUser(user: User, mention = true): string {
  if (isNil(user.username))
    return toString(user.id);

  return mention ? `@${user.username}` : user.username;
}

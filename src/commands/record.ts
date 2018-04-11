import * as Tg from 'node-telegram-bot-api';
import { isNil } from 'lodash';
import { getRepository } from 'typeorm';

import { Message } from '../entity';
import { registerUser } from './register';

export const RECORD_REGEX = /.*/;

export async function recordMessage(bot: Tg, msg: Tg.Message) {
  await registerUser(bot, msg, false);
  await getRepository(Message).save(toMessageRow(msg));
}

function toMessageRow(msg: Tg.Message): Message {
  return {
    id: msg.message_id,
    text: msg.text,
    date: msg.date,

    original: JSON.stringify(msg),

    chat: msg.chat.id,
    userId: isNil(msg.from) ? undefined : msg.from.id
  };
}

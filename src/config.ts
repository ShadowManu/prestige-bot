import { Connection, createConnection, Repository } from 'typeorm';
import { config } from 'dotenv'; config();

import { User } from './entity';

// See https://github.com/yagop/node-telegram-bot-api/issues/319
process.env.NTBA_FIX_319 = 'aware';

export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
export const BASE_PRESTIGE = 50;
export let connection: Connection;
export let UserRepo: Repository<User>;

/** Use this function to await for database connection */
export async function configure() {
  connection = await createConnection();
  UserRepo = connection.getRepository(User);
}

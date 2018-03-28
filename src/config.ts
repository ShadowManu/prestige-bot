import { config } from 'dotenv'; config();

// See https://github.com/yagop/node-telegram-bot-api/issues/319
process.env.NTBA_FIX_319 = 'aware';

export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
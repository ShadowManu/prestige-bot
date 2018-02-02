import { config } from 'dotenv';
import * as Tg from 'node-telegram-bot-api';

config();

const token = process.env.TELEGRAM_TOKEN!;

const bot = new Tg(token, { polling: true });

bot.on('message', (msg: Tg.Message) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  bot.sendMessage(chatId, 'Received your message: ' + message);
});
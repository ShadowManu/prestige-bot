import * as Tg from 'node-telegram-bot-api';

export const ISSUES_REGEX = /#BotWithIssues/i;

export async function respondIssues(bot: Tg, msg: Tg.Message) {
  return bot.sendMessage(msg.chat.id, `Then submit a PR, you piece of shit.`);
}

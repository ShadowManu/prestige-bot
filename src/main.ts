import { createConnection, Connection } from 'typeorm';

import { configure } from './config';
import { registerBot } from './bot';

async function bootstrap() {
  await configure();
  registerBot();
}

bootstrap();

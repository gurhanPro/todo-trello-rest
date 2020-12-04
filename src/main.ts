import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const PORT = 9000;
  await app.listen(PORT, () => {
    console.log("running on port", PORT);
  });
}
bootstrap();

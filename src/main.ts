import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const CLIENT_URL = configService.get<string>('CLIENT_URL');
  app.enableCors({
    origin: ['http://localhost:3000', 'http://109.241.212.127:3000'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

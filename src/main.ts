import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Favs API Documentation')
    .setDescription('REST API created for Favs Lists')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth')
    .addTag('favs')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();

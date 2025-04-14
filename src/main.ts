import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Esto se coloca antes del nombre de los controladores
  // ejemplo 'http://localhost:3000/api/v2/pokemon'
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(  
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    }) 
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
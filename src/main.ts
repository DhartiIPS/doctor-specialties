import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 5004,
    },
  });

  await app.listen();
  console.log('🏥 Doctor Specialties microservice running on port 5004');
}

bootstrap();

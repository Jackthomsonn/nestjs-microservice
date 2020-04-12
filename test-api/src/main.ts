import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

function bootstrap() {
  const microserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [ 'rabbitMqUrl' ],
      queue: 'microservice_one_queue',
      queueOptions: {
        durable: false
      },
    },
  };

  NestFactory.createMicroservice(AppModule, microserviceOptions).then(app => {
    app.listen(() => {
      console.log('Microservice is listening');
    });
  });
}

bootstrap();

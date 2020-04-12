import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([ {
      name: 'microserviceone',
      transport: Transport.RMQ,
      options: {
        urls: [ 'rabbitMqUrlHere' ],
        queue: 'microservice_one_queue',
        queueOptions: {
          durable: false
        },
      }
    } ])
  ],
  controllers: [ AppController ],
  providers: [],
})
export class AppModule { }

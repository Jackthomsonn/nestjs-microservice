import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject('microserviceone') private microserviceOneClient: ClientProxy) { }

  @Get()
  async get() {
    const data = await this.microserviceOneClient.send('get', []).toPromise();

    return data;
  }
}

import { Auth0Guard } from './auth0/auth0.guard';
import { Injectable, UseGuards } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 

  getAutor(): string {
    return 'GET autor!';
  }

  getLibro(): string {
    return 'GET libro!';
  }

}

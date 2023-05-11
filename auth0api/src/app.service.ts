import { Injectable } from '@nestjs/common';

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

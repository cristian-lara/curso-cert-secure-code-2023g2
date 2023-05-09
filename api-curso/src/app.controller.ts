import { configuracion } from './configuracion/configuracion';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('puerto bdd', configuracion.bdd.port)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  guardar(){}
}

import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('variable de entorno ejemplo', process.env.EJEMPLO_VARIABLE)
  console.log('nombre', process.env.NOMBRE)
  console.log('edad', 14)
  console.log('puerto base de datos', +process.env.BDD_PORT)
  console.log('es prod', process.env.ES_PROD === 'false')
  
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  guardar(){}
}

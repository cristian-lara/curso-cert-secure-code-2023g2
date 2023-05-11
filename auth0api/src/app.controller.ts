import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth0Guard } from './auth0/auth0.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(Auth0Guard)
  @Get('autor')
  getAutor(): string {
    return this.appService.getAutor();
  }

  @Get('libro')
  getLibro(): string {
    return this.appService.getLibro();
  }
}

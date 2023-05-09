import { AuthService } from './auth.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService:AuthService
    ){}


    @Get(':usuario/:password')
    login(@Param('usuario') usuario , @Param('password') password){
        return this.authService.login(usuario, password)
    }
}

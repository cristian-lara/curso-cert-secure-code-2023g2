import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {




    @Get()
    getUsuario(){

        return 'get usuario'
    }
}

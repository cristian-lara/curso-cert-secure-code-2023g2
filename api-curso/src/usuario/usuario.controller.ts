import { UsuarioService } from './usuario.service';
import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get('porId')
    getUsuario(){

        return this.usuarioService.getUsuario(1);
    }

    @Get('lista')
    getListaUsuarios(){

        return this.usuarioService.getAllUsuarios();
    }
}

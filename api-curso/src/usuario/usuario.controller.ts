import { AuthGuard } from './../auth/auth.guard';
import { UsuarioService } from './usuario.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}


    @UseGuards(AuthGuard)
    @Get('porId/:idUsuario')
    getUsuario(@Param('idUsuario') id){

        return this.usuarioService.getUsuario(id);
    }

    @UseGuards(AuthGuard)
    @Get('lista')
    getListaUsuarios(){

        return this.usuarioService.getAllUsuarios();
    }
}

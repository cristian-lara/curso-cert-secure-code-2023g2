import { UsuarioService } from './../usuario/usuario.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

constructor(private readonly jwtService: JwtService,
    private readonly usuarioService: UsuarioService
    ){}


    login(username: string, password: string){
        // verificar las credenciales del usuario
        const usuarioEncontrado = this.usuarioService.buscarUsuario(username, password);
        console.log('usuario encontrado', usuarioEncontrado)
        // cuando no encuentra el usuario me retorna undefined
// const esContraseniaValida = usuarioEncontrado !== undefined;

//console.log('es contraseña valida', esContraseniaValida)
        // enviar una excepcion si estan mal las credenciales
if(!usuarioEncontrado){
    throw new UnauthorizedException()
}


        // crear el payload que necesito
        const payload = {
            nombre: usuarioEncontrado.usuario,
            codigo: usuarioEncontrado.id
        }
        // enviar el token con el payload
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

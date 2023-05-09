import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

constructor(private readonly jwtService: JwtService){}


    login(){
        // verificar las credenciales del usuario
const esContraseniaValida = true;
        // enviar una excepcion si estan mal las credenciales
if(!esContraseniaValida){
    throw new UnauthorizedException()
}


        // crear el payload que necesito
        const payload = {
            nombre: 'Cristian'
        }
        // enviar el token con el payload
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

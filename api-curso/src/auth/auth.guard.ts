import { configuracion } from './../configuracion/configuracion';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private readonly jwtService: JwtService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const tokenRecuperado = this.recuperarTokenDeCabecera(request);
    // si no me envian el token retorno false
    if(!tokenRecuperado){
      return false
    }
    try{
      this.jwtService.verify(tokenRecuperado,{secret: configuracion.auth.secretJwt})
      return true;
    }catch(e){
      return false
    }
    
  }


  recuperarTokenDeCabecera(request: Request){
    const cabeceras: any = request.headers;
    const token = cabeceras.authorization.split(' ')[1];
    return token
  }
}

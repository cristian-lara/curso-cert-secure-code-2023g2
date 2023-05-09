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
    console.log('request', request)
    const tokenRecuperado = this.recuperarTokenDeCabecera(request);
    
    return true;
  }


  recuperarTokenDeCabecera(request: Request){
    const cabeceras: any = request.headers;
    console.log('cabeceras', cabeceras)
    const token = cabeceras.authorization;
    console.log('token', token)
  }
}

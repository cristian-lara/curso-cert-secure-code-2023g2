import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
var { expressjwt:jwt } = require("express-jwt")

@Injectable()
export class Auth0Guard implements CanActivate {
  
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {

    const request = context.getArgByIndex(0);
    const response = context.getArgByIndex(1);
const validarToken = promisify(
  jwt({
    secret: expressJwtSecret({
      cache: true,
    rateLimit: true,
    jwksUri: 'https://dev-2023-g2.us.auth0.com/.well-known/jwks.json',
    jwksRequestsPerMinute: 5
    }),
    audience: 'cursogr2',
    issuer: 'https://dev-2023-g2.us.auth0.com/',
    algorithms: ['RS256']
  })
 
)
try{
await validarToken(request, response);
return true;
}
catch(e){
  console.log('error', e)
  return false;
}
    
  }
}

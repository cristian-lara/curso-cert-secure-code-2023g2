import { configuracion } from './configuracion/configuracion';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { MascotaService } from './mascota/mascota.service';
import { MascotaController } from './mascota/mascota.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configuracion.auth.secretJwt,
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AppController, UsuarioController, MascotaController, AuthController],
  providers: [AppService, UsuarioService, MascotaService, AuthService],
})
export class AppModule {}

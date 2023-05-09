import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('mascota')
export class MascotaController {


    @UseGuards(AuthGuard)
    @Get()
    getMascota(){

        return 'get mascota'
    }
}

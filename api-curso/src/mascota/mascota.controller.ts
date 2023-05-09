import { Controller, Get } from '@nestjs/common';

@Controller('mascota')
export class MascotaController {


    @Get()
    getMascota(){

        return 'get mascota'
    }
}

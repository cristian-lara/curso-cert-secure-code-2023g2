import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
    usuarios = [
        {
            id: 1,
            usuario: 'Cristian',
            password: '1234'
        },
        {
            id: 2,
            usuario: 'user',
            password: '1234'
        },
        {
            id: 3,
            usuario: 'user test',
            password: '1234'
        }
    ]

    getUsuario(idUsuario:number){
        return this.usuarios.find(usuario => usuario.id === idUsuario)
    }

    buscarUsuario(username:string, password: string){
        return this.usuarios
        .find(usuario => 
            (usuario.usuario === username && usuario.password === password))
    }

    getAllUsuarios(){
        return this.usuarios;
    }
}

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const configuracion = {
    bdd:{
        port: process.env.BDD_PORT || 1527 ,
        hostname: process.env.BDD_HOSTNAME
    },
    auth:{
        secretJwt: process.env.JWT_SECRETO
    }
}
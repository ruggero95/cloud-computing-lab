import { AccessTokenError } from "./errorResponse"
import * as jwt from "jsonwebtoken"
import { logger } from "./logger"
import { NextFunction, Request, Response } from "express"

//TODO implementare login per microservizi esterni
export const microserviceName = "PDF_MICROSERVICE"

export class Auth{
    private static key:jwt.Secret = process.env.LOCALHOST_TOKEN || ''
    private static checkLocalhostTokenExistence(req:Request, res:Response, next:NextFunction){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            throw(new AccessTokenError('Access token inesistente'))
        }
        jwt.verify(token, Auth.key , function(err: jwt.VerifyErrors | null, payload: jwt.JwtPayload){
            if(!payload.services){
                throw(new AccessTokenError('Missing access permission into token'))
            }
            if(!payload.services.some((e:any)=>e==microserviceName)){
                throw(new AccessTokenError('Missing service acces'))            
            }
        })

        return next()
    }
    private static isLocalhost(hostname){
        return hostname.indexOf('localhost') !== -1 ? true :false;
    }

    public static authenticate(req, res, next){
        logger.info('check auth')
        if(Auth.isLocalhost(req.hostname)){
            logger.info('entro qui')
            return Auth.checkLocalhostTokenExistence(req, res, next)
        }else{
            //TODO implementare auth microservizi esterni, vedi schema appunti
            return next()
        }
    }
}
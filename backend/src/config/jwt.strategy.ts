import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { CookieRequest } from "src/interfaces/CookieI";
import { PayloadI } from "src/interfaces/PayloadI";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private config:ConfigService
    ){
        console.log(config);
        super({
            jwtFromRequest:ExtractJwt.fromExtractors([(req:CookieRequest)=>{
                return req.cookies?.jwt;
            }]),
            secretOrKey:config.getOrThrow<string>('SECRET'),
            ignoreExpiration:false
        })
    }
    async validate(payload: PayloadI){
        return {id:payload.id,role:payload.role}
    }
}
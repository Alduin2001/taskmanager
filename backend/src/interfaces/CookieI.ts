import { Request } from "express";

export interface CookieRequest extends Request{
    cookie:{[key:string]:string}
}
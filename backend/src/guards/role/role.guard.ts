import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ]);
    if(!requiredRoles){
      return true;
    }
    console.log(requiredRoles);
    const { user } = context.switchToHttp().getRequest();

    console.log(user);
    return requiredRoles.some((role)=>user?.role===role);
  }
}

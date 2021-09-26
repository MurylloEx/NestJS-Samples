import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { bitsToRoles } from '../roles.enum';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles)
      return true;

    const { user } = context.switchToHttp().getRequest();
    const userRoles = bitsToRoles(user?.role);

    return requiredRoles.some((r_role) => userRoles.some((u_role) => r_role == u_role));
  }
}


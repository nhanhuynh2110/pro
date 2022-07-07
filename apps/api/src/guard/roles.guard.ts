import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES_KEY } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    if ((context.getType() as string) === 'graphql') {
      const gqlExecutionContext = GqlExecutionContext.create(context);
      const request: Request = gqlExecutionContext.getContext().req;
      const headers: Request['headers'] & { roles?: string } = request?.headers;
      const userRoles = headers?.roles ?? '';
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }
      return requiredRoles.includes(userRoles as Role);
    }
    return true;
  }
}

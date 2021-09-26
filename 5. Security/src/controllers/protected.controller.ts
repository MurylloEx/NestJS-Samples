import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthorizeGuard } from "src/security/guards/authorize.guard";
import { Roles } from "src/security/roles.decorator";
import { Roles as Permissions } from "src/security/roles.enum";

@Controller('protected')
@UseGuards(AuthorizeGuard)
export class ProtectedController {

  @Get('anonymous')
  anonymousRoute(){
    return "Eu não estou autenticado no sistema!";
  }

  @Get('client')
  @Roles(Permissions.Client)
  clientRoute(){
    return "Eu possuo a permissão de cliente!";
  }

  @Get('seller')
  @Roles(Permissions.Seller)
  sellerRoute(){
    return "Eu possuo a permissão de vendedor!";
  }

  @Get('manager')
  @Roles(Permissions.Manager)
  managerRoute(){
    return "Eu possuo a permissão de gerente!";
  }

}

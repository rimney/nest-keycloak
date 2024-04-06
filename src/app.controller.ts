import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly configService: ConfigService
    ) {}


  @Get('user')
  getUser() : string {
    return (this.appService.getUser(this.configService.get<string>('USERNAME')));
  }
  @Get('realm')
  getRealm() : string {
    return (this.appService.getRealm(this.configService.get<string>('KEYCLOAK_REALM')));
  }
  @Get('keycloak-user')
  getKeycloakUser() : string {
    return (this.appService.getKeycloakUser(this.configService.get<string>('KEYCLOAK_USER')));
  }
  @Get('client-id')
  getClientId() : string {
    return (this.appService.getClientId(this.configService.get<string>('KEYCLOAK_CLIENT_ID')));
  }
}

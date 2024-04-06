import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getClientId(clientid : string): string {
    return `hello from ${clientid}`
  }
  getRealm(realm : string): string {
    return `hello from ${realm}`
  }
  getKeycloakUser(keycloakUser : string): string {
    return `hello from ${keycloakUser}`
  }
  getKeycloakClient(client : string): string {
    return `hello from ${client}`
  }
  getUser(user : string): string {
    return `hello from ${user}`
  }
}

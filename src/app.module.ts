import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';
import { register } from 'module';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [ConfigModule.forRoot({
    // envFilePath: '.development.env', // uncomment if you want to use a custom location .env path
    // envFilePath: ['.env.development.local', '.env.development'], // uncomment if you want to use multiple .env files
    // ignoreEnvFile: true, // If you don't want to load the .env file, but instead would like to simply access environment
                            // variables from the runtime environmentIf you don't want to load the .env file, but instead would
                            // like to simply access environment variables from the runtime environment
    isGlobal: true, // to avoid multiple imports you can globalize it to the entire project would access it
  }),
  KeycloakConnectModule.register({
    
    authServerUrl: `${process.env.KEYCLOAK_URL}`,
    realm: `${process.env.KEYCLOAK_REALM}`,
    clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
    secret: `${process.env.KEYCLOAK_CLIENT_KEY}`
  }),
  DatabaseModule,
],
  controllers: [AppController, UserController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    UserService,
  ],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}

}

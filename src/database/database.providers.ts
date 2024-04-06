import { DataSource } from 'typeorm';
import config from 'config';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {        
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>("DATABASE_HOST"), // Make sure this matches your .env variable
        port: configService.get<number>("DATABASE_PORT"), // Make sure this matches your .env variable
        username: configService.get<string>('DATABASE_USERNAME'), // Make sure this matches your .env variable
        password: configService.get<string>('DATABASE_PASSWORD'), // Make sure this matches your .env variable
        database: configService.get<string>('DATABASE'), // Make sure this matches your .env variable
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.get<string>('SYNCHRONIZE') ? true : false,
      });
      return dataSource.initialize();
    },
  },
];

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { validationSchema } from './config/validation';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const username = encodeURIComponent(configService.get<string>('mongo.username'));
        const password = encodeURIComponent(configService.get<string>('mongo.password'));
        const dbname = encodeURIComponent(configService.get<string>('mongo.db'));

        const uri = `mongodb+srv://${username}:${password}@cluster0.gi4j3eo.mongodb.net/${dbname}?retryWrites=true&w=majority`;
        return { uri };
      },
    }),

    PeopleModule,
  ],
})
export class AppModule {}

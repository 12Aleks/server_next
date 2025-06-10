import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { Person, PersonSchema } from './schema/person.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    ],
    controllers: [PeopleController],
    providers: [PeopleService],
})
export class PeopleModule {}
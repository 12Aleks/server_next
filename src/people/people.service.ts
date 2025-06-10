import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person, PersonDocument } from './schema/person.schema';

@Injectable()
export class PeopleService {
    constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

    async getAllPersons(): Promise<Person[]> {
        return this.personModel.find().exec();
    }

    async addPerson(dto: CreatePersonDto): Promise<Person> {
        const createdPerson = new this.personModel(dto);
        return createdPerson.save();
    }

    async removePerson(id: string): Promise<boolean> {
        const result = await this.personModel.deleteOne({ _id: id }).exec();
        return result.deletedCount > 0;
    }
}
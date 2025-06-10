import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonDto } from './dto/person.dto';


@Injectable()
export class PeopleService {
    private people: PersonDto[] = [];
    private idCounter = 1;

    getAllPersons(): PersonDto[] {
        return this.people;
    }

    addPerson(dto: CreatePersonDto): PersonDto {
        const person: PersonDto = {
            id: this.idCounter++,
            ...dto,
        };
        console.log(person)
        this.people.push(person);
        return person;
    }

    removePerson(id: number): boolean {
        const initial = this.people.length;
        this.people = this.people.filter(p => p.id !== id);
        return this.people.length < initial;
    }
}
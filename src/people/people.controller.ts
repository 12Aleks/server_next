import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('people')
export class PeopleController {
    constructor(private readonly peopleService: PeopleService) {}

    @Get()
    getAll() {
        return this.peopleService.getAllPersons();
    }

    @Post()
    add(@Body() dto: CreatePersonDto) {
        return this.peopleService.addPerson(dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.peopleService.removePerson(Number(id));
    }
}
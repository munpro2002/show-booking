import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Events } from 'src/typeorm/entities/Events';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../dto/CreateEvent.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events) private userRepository: Repository<Events>,
  ) {}

  getAllEvents() {
    return this.userRepository.find();
  }

  async findFilterEvents(searchKeyWord: string) {
    const eventsList = await this.getAllEvents();

    const filterList = eventsList.filter((event) => {
      return event.title.toLowerCase().includes(searchKeyWord.toLowerCase());
    });

    return filterList;
  }

  createEvent(createEventDto: CreateEventDto) {
    const newEvents = this.userRepository.create({
      ...createEventDto,
      createTime: new Date(),
    });
    return this.userRepository.save(newEvents);
  }
}

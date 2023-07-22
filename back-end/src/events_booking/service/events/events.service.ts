import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Venue } from 'src/typeorm/entities/Venue';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../../dto/CreateEvent.dto';
import { CreateEventParams } from 'src/utils/types';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  getAllEvents() {
    return this.eventRepository.find();
  }

  async findFilterEvents(searchKeyWord: string) {
    const eventsList = await this.getAllEvents();

    const filterList = eventsList.filter((event) => {
      return event.title.toLowerCase().includes(searchKeyWord.toLowerCase());
    });

    return filterList;
  }

  createEvent(createEventParams: CreateEventParams, venue: Venue) {
    const newEvents = this.eventRepository.create({
      ...createEventParams,
      createTime: new Date(),
      status: true,
      venue,
    });
    return this.eventRepository.save(newEvents);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Seatmap } from 'src/typeorm/entities/Seatmap';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../../dto/CreateEvent.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  getAllEvents() {
    return this.eventRepository.find();
  }

  findEvent(event_id: string) {
    return this.eventRepository.findOne({ where: { id: event_id } });
  }

  async findFilterEvents(searchKeyWord: string) {
    const eventsList = await this.getAllEvents();

    const filterList = eventsList.filter((event) => {
      return event.title.toLowerCase().includes(searchKeyWord.toLowerCase());
    });

    return filterList;
  }

  createEvent(createEventParams: CreateEventDto, seatmap: Seatmap) {
    const newEvents = this.eventRepository.create({
      ...createEventParams,
      createTime: new Date(),
      status: true,
      seatmap: seatmap,
    });
    return this.eventRepository.save(newEvents);
  }
}

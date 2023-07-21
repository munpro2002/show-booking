import { Controller, Get, Post, Body, Query, Logger } from '@nestjs/common';
import { CreateEventDto } from '../dto/CreateEvent.dto';
import { EventsService } from '../service/events.service';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Get('search')
  getFilterEvents(@Query('query') query: string) {
    Logger.log(this.eventService.findFilterEvents(query));

    return this.eventService.findFilterEvents(query);
  }

  @Get()
  getEvent() {
    return this.eventService.getAllEvents();
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    this.eventService.createEvent(createEventDto);
  }
}

import { Controller, Get, Post, Body, Query, Logger } from '@nestjs/common';
import { CreateEventDto } from 'src/events_booking/dto/CreateEvent.dto';
import { EventsService } from 'src/events_booking/service/events/events.service';
import { SeatsService } from 'src/events_booking/service/seats/seats.service';

@Controller('events')
export class EventsController {
  constructor(
    private eventService: EventsService,
    private seatService: SeatsService,
  ) {}

  @Get()
  getEvent() {
    return this.eventService.getAllEvents();
    Logger.log("hello")
  }

  @Get('search')
  getFilterEvents(@Query('query') query: string) {
    Logger.log(this.eventService.findFilterEvents(query));

    return this.eventService.findFilterEvents(query);
  }

  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const seatmap = await this.seatService.createSeatmap();

    return this.eventService.createEvent(createEventDto, seatmap);
  }
}

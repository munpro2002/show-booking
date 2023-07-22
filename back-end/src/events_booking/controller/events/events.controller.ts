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
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const { address, ...eventDetails } = createEventDto;
    Logger.log(address);

    const venue = await this.seatService.createVenue(address);
    this.eventService.createEvent(eventDetails, venue);
  }
}

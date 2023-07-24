import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Logger,
} from '@nestjs/common';
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
  getEvents() {
    return this.eventService.getAllEvents();
  }

  @Get('seatmap/:id')
  async getEventSeatmap(@Param('id') id: string) {
    return await this.seatService.findSeatmap(id);
  }

  @Get('search')
  getFilterEvents(@Query('query') query: string) {
    Logger.log(this.eventService.findFilterEvents(query));

    return this.eventService.findFilterEvents(query);
  }

  @Post('create_event')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const seatmap = await this.seatService.createSeatmap();
    this.eventService.createEvent(createEventDto, seatmap);
  }
}

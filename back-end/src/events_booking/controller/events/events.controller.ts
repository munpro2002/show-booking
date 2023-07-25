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
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/events_booking/cloudinary/Cloudinary.service';

@Controller('events')
export class EventsController {
  constructor(
    private eventService: EventsService,
    private seatService: SeatsService,
    private readonly cloudinaryService: CloudinaryService,
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
  @UseInterceptors(FileInterceptor('posterImg'))
  async createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEventDto: CreateEventDto,
  ) {
    const result = await this.cloudinaryService.uploadFile(file);

    createEventDto.posterImg = result.url;

    const seatmap = await this.seatService.createSeatmap();
    this.eventService.createEvent(createEventDto, seatmap);
  }
}

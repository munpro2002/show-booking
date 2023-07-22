import { Module } from '@nestjs/common';
import { EventsController } from './controller/events/events.controller';
import { EventsService } from './service/events/events.service';
import { SeatsService } from './service/seats/seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Seat } from 'src/typeorm/entities/Seat';
import { Venue } from 'src/typeorm/entities/Venue';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Seat, Venue])],
  controllers: [EventsController],
  providers: [EventsService, SeatsService],
})
export class EventsBookingModule {}

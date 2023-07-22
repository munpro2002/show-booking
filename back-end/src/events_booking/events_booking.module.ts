import { Module } from '@nestjs/common';
import { EventsController } from './controller/events/events.controller';
import { EventsService } from './service/events/events.service';
import { SeatsService } from './service/seats/seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Seat } from 'src/typeorm/entities/Seat';
import { Seatmap } from 'src/typeorm/entities/Seatmap';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Seat, Seatmap])],
  controllers: [EventsController],
  providers: [EventsService, SeatsService],
})
export class EventsBookingModule {}

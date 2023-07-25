import { Module } from '@nestjs/common';
import { EventsController } from './controller/events/events.controller';
import { EventsService } from './service/events/events.service';
import { SeatsService } from './service/seats/seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Seat } from 'src/typeorm/entities/Seat';
import { Seatmap } from 'src/typeorm/entities/Seatmap';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { Customer } from 'src/typeorm/entities/Customer';
import { TicketsController } from './controller/tickets/tickets.controller';
import { TicketsService } from './service/tickets/tickets.service';
import { CustomersService } from './service/customers/customers.service';
import { CloudinaryService } from './cloudinary/Cloudinary.service';
import { CloudinaryProvider } from './cloudinary/Cloudinary.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Seat, Seatmap, Ticket, Customer])],
  controllers: [EventsController, TicketsController],
  providers: [
    EventsService,
    SeatsService,
    TicketsService,
    CustomersService,
    CloudinaryProvider,
    CloudinaryService,
  ],
})
export class EventsBookingModule {}

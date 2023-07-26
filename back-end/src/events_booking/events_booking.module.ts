import { Module } from '@nestjs/common';
import { EventsController } from './controller/events/events.controller';
import { EventsService } from './service/events/events.service';
import { SeatsService } from './service/seats/seats.service';
import { CloudinaryModule } from 'src/cloudinary/Cloudinary.module';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/entities/Event';
import { Seat } from 'src/typeorm/entities/Seat';
import { Seatmap } from 'src/typeorm/entities/Seatmap';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { Customer } from 'src/typeorm/entities/Customer';
import { TicketsController } from './controller/tickets/tickets.controller';
import { TicketsService } from './service/tickets/tickets.service';
import { CustomersService } from './service/customers/customers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Seat, Seatmap, Ticket, Customer]),
    EmailModule,
    CloudinaryModule,
  ],
  controllers: [EventsController, TicketsController],
  providers: [EventsService, SeatsService, TicketsService, CustomersService],
})
export class EventsBookingModule {}

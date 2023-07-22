import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './typeorm/entities/Event';
import { Customer } from './typeorm/entities/Customer';
import { Seat } from './typeorm/entities/Seat';
import { Ticket } from './typeorm/entities/Ticket';
import { Venue } from './typeorm/entities/Venue';
import { EventsBookingModule } from './events_booking/events_booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'duyanpro123',
      database: 'event booking',
      entities: [Event, Customer, Seat, Ticket, Venue],
      synchronize: true,
    }),
    EventsBookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EventsController } from './controller/events.controller';
import { EventsService } from './service/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/typeorm/entities/Events';

@Module({
  imports: [TypeOrmModule.forFeature([Events])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

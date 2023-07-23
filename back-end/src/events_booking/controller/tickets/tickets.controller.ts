import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { TicketsService } from 'src/events_booking/service/tickets/tickets.service';
import { CreateTicketDto } from 'src/events_booking/dto/CreateTicket.dto';
import { SeatsService } from 'src/events_booking/service/seats/seats.service';
import { EventsService } from 'src/events_booking/service/events/events.service';
import { CustomersService } from 'src/events_booking/service/customers/customers.service';

@Controller('tickets')
export class TicketsController {
  constructor(
    private ticketService: TicketsService,
    private eventService: EventsService,
    private seatService: SeatsService,
    private customersService: CustomersService,
  ) {}

  @Get()
  getTickets() {
    return this.ticketService.getAllTickets();
  }

  @Post()
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    const { seats_id, event_id, ...customer_info } = createTicketDto;

    const tickets = [];

    const event = await this.eventService.findEvent(event_id);
    const customer = await this.customersService.creatCustomer(customer_info);

    for (let seat_id of seats_id) {
      const seat = await this.seatService.findTicketSeat(seat_id);

      const ticket = await this.ticketService.createTicket(
        seat,
        event,
        customer,
      );
      tickets.push(ticket);
    }

    return tickets;
  }
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './Event';
import { Seat } from './Seat';
import { Customer } from './Customer';

@Entity({ name: 'ticket', schema: 'event booking' })
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Event, (event) => event.tickets)
  event: Event;

  @ManyToOne(() => Seat, (seat) => seat.tickets)
  seat: Seat;

  @ManyToOne(() => Customer, (customer) => customer.tickets)
  customer: Customer;
}

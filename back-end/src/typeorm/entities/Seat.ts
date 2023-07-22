import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ticket } from './Ticket';
import { Venue } from './Venue';

@Entity({ name: 'seat', schema: 'event booking' })
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  seatPos: number;

  @Column()
  seatType: string;

  @Column()
  status: string;

  @ManyToOne(() => Venue, (venue) => venue.seat)
  venue: Venue;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];
}

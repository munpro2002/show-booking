import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Ticket } from './Ticket';
import { Venue } from './Venue';

@Entity({ name: 'event', schema: 'event booking' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  eventType: string;

  @Column()
  eventDate: string;

  @Column()
  location: string;

  @Column()
  posterImg: string;

  @Column()
  createTime: Date;

  @Column()
  status: boolean;

  @ManyToOne(() => Venue, (venue) => venue.event)
  venue: Venue;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];
}

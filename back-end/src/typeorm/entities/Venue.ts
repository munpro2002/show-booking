import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Seat } from './Seat';
import { Event } from './Event';

@Entity({ name: 'venue', schema: 'event booking' })
export class Venue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  status: boolean;

  @OneToMany(() => Seat, (seat) => seat.venue)
  seat: Seat[];

  @OneToMany(() => Event, (event) => event.venue)
  event: Event[];
}

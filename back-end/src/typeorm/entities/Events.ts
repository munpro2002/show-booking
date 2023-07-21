import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events', schema: 'event booking' })
export class Events {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  eventType: string;

  @Column()
  posterImg: string;

  @Column()
  createTime: Date;

  @Column()
  status: boolean;
}

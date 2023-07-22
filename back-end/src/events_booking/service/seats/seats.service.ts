import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from 'src/typeorm/entities/Seat';
import { Venue } from 'src/typeorm/entities/Venue';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat) private seatRepository: Repository<Seat>,
    @InjectRepository(Venue) private venueRepository: Repository<Venue>,
  ) {}

  getAllVenues() {
    return this.venueRepository.find();
  }

  findVenue() {}

  async createSeat(venue: Venue) {
    for (let seatPos = 1; seatPos <= 100; seatPos++) {
      const seat = this.seatRepository.create({
        seatPos: seatPos,
        seatType: seatPos <= 20 ? 'normal' : seatPos <= 60 ? 'vip' : 'sweetbox',
        status: 'available',
        venue,
      });
      await this.seatRepository.save(seat);
    }
  }

  async createVenue(address: string) {
    Logger.log(address);

    const newVenue = this.venueRepository.create({
      address: address,
      status: true,
    });

    await this.venueRepository.save(newVenue);

    await this.createSeat(newVenue);

    return newVenue;
  }
}

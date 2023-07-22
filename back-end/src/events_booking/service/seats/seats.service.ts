import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from 'src/typeorm/entities/Seat';
import { Seatmap } from 'src/typeorm/entities/Seatmap';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat) private seatRepository: Repository<Seat>,
    @InjectRepository(Seatmap) private seatmapRepository: Repository<Seatmap>,
  ) {}

  async createSeat(seatmap: Seatmap) {
    for (let seatPos = 1; seatPos <= 100; seatPos++) {
      const seat = this.seatRepository.create({
        seatPos: seatPos,
        seatType: seatPos <= 20 ? 'normal' : seatPos <= 60 ? 'vip' : 'sweetbox',
        status: 'available',
        seatmap: seatmap,
      });
      await this.seatRepository.save(seat);
      Logger.log('hello');
    }
  }

  async createSeatmap() {
    const newSeatmap = this.seatmapRepository.create({
      status: true,
    });

    await this.seatmapRepository.save(newSeatmap);
    await this.createSeat(newSeatmap);

    const seats = await this.seatRepository.find();
    newSeatmap.seat = seats;

    await this.seatmapRepository.save(newSeatmap);

    return newSeatmap;
  }
}

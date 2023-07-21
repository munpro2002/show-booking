export class CreateEventDto {
  id: number;
  title: string;
  price: number;
  eventType: string;
  eventDate: string;
  posterImg: string;
  status: boolean;
  createTime: Date;
}

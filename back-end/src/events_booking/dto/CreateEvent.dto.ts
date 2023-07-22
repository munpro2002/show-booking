export class CreateEventDto {
  id: string;
  title: string;
  price: number;
  eventType: string;
  eventDate: string;
  posterImg: string;
  location: string;
  address: string; //venue address
}

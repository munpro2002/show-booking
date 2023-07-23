export class CreateTicketDto {
  fullName: string;
  email: string;
  phone: string;
  seats_id: string[];
  event_id: string;
}

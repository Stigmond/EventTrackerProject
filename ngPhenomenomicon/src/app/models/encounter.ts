export class Encounter {

  date: string;
  state: string;
  latitude: number;
  longitude: number;
  entityType: string;
  entityUrl: string;
  body: string;

  constructor(
    date?: string,
    state?: string,
    latitude?: number,
    longitude?: number,
    entityType?: string,
    entityUrl?: string,
    body?: string
  ) {
    this.date = date;
    this.state = state;
    this.latitude = latitude;
    this.longitude = longitude;
    this.entityType = entityType;
    this.entityUrl = entityUrl;
    this.body = body;
  }


}

export class Encounter {

  date: string;
  city: string;
  stateCountry: string;
  latitude: number;
  longitude: number;
  entityType: string;
  entityUrl: string;
  body: string;

  constructor(
    date?: string,
    city?: string,
    stateCountry?: string,
    latitude?: number,
    longitude?: number,
    entityType?: string,
    entityUrl?: string,
    body?: string
  ) {
    this.date = date;
    this.city = city;
    this.stateCountry = stateCountry;
    this.latitude = latitude;
    this.longitude = longitude;
    this.entityType = entityType;
    this.entityUrl = entityUrl;
    this.body = body;
  }


}

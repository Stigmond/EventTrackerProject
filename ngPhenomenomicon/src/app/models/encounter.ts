export class Encounter {

  id: number;
  date: string;
  city: string;
  stateCountry: string;
  latitude: number;
  longitude: number;
  entityType: string;
  entityUrl: string;
  body: string;

  constructor(
    id?: number,
    date?: string,
    city?: string,
    stateCountry?: string,
    latitude?: number,
    longitude?: number,
    entityType?: string,
    entityUrl?: string,
    body?: string
  ) {
    this.id = id;
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

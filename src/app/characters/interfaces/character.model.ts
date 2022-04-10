export interface FetchRickMortyResponse {
  info:    Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  string;
}

export interface Character {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}

export interface Location {
  name: string;
  url:  string;
}

// export enum Gender {
//   Female = "Female",
//   Male = "Male",
//   Unknown = "unknown",
// }

// export enum Species {
//   Alien = "Alien",
//   Human = "Human",
// }

// export enum Status {
//   Alive = "Alive",
//   Dead = "Dead",
//   Unknown = "unknown",
// }

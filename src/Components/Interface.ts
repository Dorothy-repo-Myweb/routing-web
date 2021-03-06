export interface IBodyResponse {
  count: number;
  next: string;
  previous: null;
  result: {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: number;
    gender: string;
    homeworld: string;
    films: [string, string, string, string];
    species: [];
    vehicles: [string, string];
    starships: [string, string];
    created: number;
    edited: number;
    url: string;
  };
}

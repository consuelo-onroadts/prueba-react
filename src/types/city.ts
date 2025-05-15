export interface City {
    id: number;
    name: string;
    abrev: string | null;
    latitud?: string;
    longitud?: string;
    alias?: string;
    address: string;
  }
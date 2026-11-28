export type RestCountry = {
  name: {
    common: string;
    official: string;
  };

  flags: {
    png: string;
    svg: string;
  };

  capital?: string[];

  region: string;

  population: number;

  cca2: string;
};
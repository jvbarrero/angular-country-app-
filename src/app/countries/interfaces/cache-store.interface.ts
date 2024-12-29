import { Country } from "./country.interface"
import { Region } from "./region.type";

export interface CacheStore{
  byCapital: TermCounties;
  byCountries: TermCounties;
  byRegion: RegionCounties;
}

export interface TermCounties {
  term: string;
  countries: Country[];
}

export interface RegionCounties {
  region: Region;
  countries: Country[];
}

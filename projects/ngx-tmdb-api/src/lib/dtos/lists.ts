import { TMDbMovieDetails } from './movies';

export type TMDbListDetails = {
  created_by?: string;
  description?: string;
  favorite_count?: number;
  id?: string;
  items_count?: number;
  iso_639_1?: string;
  name?: string;
  poster_path?: string;
  items?: TMDbMovieDetails[];
};

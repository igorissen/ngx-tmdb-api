import { TMDbResponseStatus } from './common';
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
export type TMDbListItemStatus = {
  id?: string;
  item_present?: boolean;
};
export type TMDbListCreateStatus = TMDbResponseStatus & {
  success?: boolean;
  list_id?: number;
};

export type TMDbCreateListRequestDTO = {
  name?: string;
  description?: string;
  language?: string;
};
export type TMDbAddMovieRequestDTO = {
  media_id: number | string;
};
export type TMDbRemoveMovieRequestDTO = TMDbAddMovieRequestDTO;

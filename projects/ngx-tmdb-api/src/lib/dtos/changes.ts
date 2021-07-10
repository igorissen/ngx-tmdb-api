import { TMDbPaginated } from './common';

export type TMDbChangeListItem = {
  id?: string;
  adult?: boolean;
};

export type TMDbChangeList = TMDbPaginated<TMDbChangeListItem>;

import { searchCompanies } from './companies.request';
import { searchCollections } from './collections.request';
import { searchKeywords } from './keywords.request';
import { searchMovies } from './movies.request';
import { searchPeople } from './people.request';
import { searchTvShows } from './tv.request';
import { multiSearch } from './multi.request';

export const Search = {
  searchTvShows,
  searchPeople,
  searchMovies,
  searchCompanies,
  searchCollections,
  searchKeywords,
  multiSearch
};

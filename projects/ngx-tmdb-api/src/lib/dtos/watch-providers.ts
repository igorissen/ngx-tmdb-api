import { TMDbWatchProvider } from './common';

export type TMDbWatchProviderRegion = {
  iso_3166_1?: string;
  english_name?: string;
  native_name?: string;
};

export type TMDbAvailableWatchProviders = {
  results?: TMDbWatchProviderRegion[];
};

export type TMDbMovieAvailableProviders = {
  results?: TMDbWatchProvider[];
};

export type TMDbTvAvailableProviders = {
  results?: TMDbWatchProvider[];
};

import {
  TMDbAccountStates,
  TMDbAlternativeTitle,
  TMDbCast,
  TMDbChange,
  TMDbChanges,
  TMDbCountryWatchProviders,
  TMDbCredits,
  TMDbCrew,
  TMDbExternalIds,
  TMDbGenre,
  TMDbList,
  TMDbMediaImages,
  TMDbMediaKeywords,
  TMDbMediaTranslations,
  TMDbMediaVideos,
  TMDbMediaWatchProviders,
  TMDbPaginated,
  TMDbProductionCompany,
  TMDbProductionCountry,
  TMDbRateRequestDTO,
  TMDbReleaseDate,
  TMDbReview,
  TMDbSpokenLanguage
} from './common';

export type TMDbMovieDetails = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {};
  budget?: number;
  genres?: TMDbGenre[];
  genre_ids?: number[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: TMDbProductionCompany[];
  production_countries?: TMDbProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: TMDbSpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  media_type?: 'movie';
};
export type TMDbMovieAlternativeTitles = {
  id?: number;
  titles?: TMDbAlternativeTitle[];
};
export type TMDbMovieReleaseDate = {
  iso_3166_1?: string;
  release_dates?: TMDbReleaseDate[];
};
export type TMDbMovieReleaseDates = {
  id?: number;
  results?: TMDbMovieReleaseDate[];
};

export type TMDbMovieWatchProviders = TMDbMediaWatchProviders;
export type TMDbMovieAccountStates = TMDbAccountStates;
export type TMDbMoviePopular = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieTopRated = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieUpcoming = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieExternalIds = TMDbExternalIds;
export type TMDbMovieImages = TMDbMediaImages;
export type TMDbMovieKeywords = TMDbMediaKeywords;
export type TMDbMovieVideos = TMDbMediaVideos;
export type TMDbMovieTranslations = TMDbMediaTranslations;
export type TMDbMovieRecommendations = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieSimilarMovies = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieReviews = TMDbPaginated<TMDbReview>;
export type TMDbMovieLists = TMDbPaginated<TMDbList>;
export type TMDbMovieNowPlaying = TMDbPaginated<TMDbMovieDetails>;
export type TMDbMovieCredits = TMDbCredits;
export type TMDbMovieChanges = TMDbChanges;

export type TMDbRateMovieRequestDTO = TMDbRateRequestDTO;

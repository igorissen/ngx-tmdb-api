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
  TMDbMedia,
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

export type TMDbMovieDetails = TMDbMedia & {
  adult?: boolean;
  belongs_to_collection?: {};
  budget?: number;
  genre_ids?: number[];
  imdb_id?: string;
  original_title?: string;
  production_countries?: TMDbProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: TMDbSpokenLanguage[];
  tagline?: string;
  title?: string;
  video?: boolean;
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

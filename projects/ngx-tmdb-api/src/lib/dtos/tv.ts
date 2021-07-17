import {
  TMDbAccountStates,
  TMDbAlternativeTitle,
  TMDbCast,
  TMDbChanges,
  TMDbContentRating,
  TMDbCredits,
  TMDbCrew,
  TMDbEpisodeGroup,
  TMDbExternalIds,
  TMDbGenre,
  TMDbMedia,
  TMDbMediaImages,
  TMDbMediaKeywords,
  TMDbMediaTranslations,
  TMDbMediaVideos,
  TMDbMediaWatchProviders,
  TMDbNetwork,
  TMDbPaginated,
  TMDbProductionCompany,
  TMDbRateRequestDTO,
  TMDbResults,
  TMDbReview
} from './common';

export type TMDbTvEpisodeDetails = {
  air_date?: string;
  episode_number?: number;
  name?: string;
  overview?: string;
  id?: number;
  production_code?: string;
  season_number?: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
  crew?: TMDbCrew[];
  guest_stars?: TMDbCast[];
};
export type TMDbTvSeasonDetails = {
  _id?: string;
  air_date?: string;
  episodes?: TMDbTvEpisodeDetails[];
  episode_count?: number;
  name?: string;
  overview?: string;
  id?: number;
  poster_path?: string;
  season_number?: number;
};
export type TMDbTvDetails = TMDbMedia & {
  created_by?: TMDbCrew[];
  episode_run_time?: number[];
  first_air_date?: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  name?: string;
  networks?: TMDbNetwork[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_name?: string;
  seasons?: TMDbTvSeasonDetails[];
  type?: string;
};
export type TMDbTvAlternativeTitles = {
  id?: number;
  results?: TMDbAlternativeTitle[];
};
export type TMDbTvEpisodeGroup = {
  id?: string;
  name?: string;
  order?: number;
  episodes?: TMDbTvEpisodeDetails[];
  locked?: boolean;
};
export type TMDbTvEpisodeGroupsDetails = {
  description?: string;
  episode_count?: number;
  group_count?: number;
  groups?: TMDbTvEpisodeGroup[];
  id?: string;
  name?: string;
  network?: TMDbNetwork;
  type?: number;
};

export type TMDbTvWatchProviders = TMDbMediaWatchProviders;
export type TMDbTvAccountStates = TMDbAccountStates;
export type TMDbTvAggregateCredits = TMDbCredits;
export type TMDbTvCredits = TMDbCredits;
export type TMDbTvChanges = TMDbChanges;
export type TMDbTvContentRatings = TMDbResults<TMDbContentRating>;
export type TMDbTvExternalIds = TMDbExternalIds;
export type TMDbTvImages = TMDbMediaImages;
export type TMDbTvKeywords = TMDbMediaKeywords;
export type TMDbTvRecommendations = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvScreenedTheatrically = TMDbResults<TMDbTvEpisodeDetails>;
export type TMDbTvSimilarTvShows = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvTranslations = TMDbMediaTranslations;
export type TMDbTvVideos = TMDbMediaVideos;
export type TMDbTvTopRated = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvPopular = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvAiringToday = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvOnTheAir = TMDbPaginated<TMDbTvDetails>;
export type TMDbTvEpisodeGroups = TMDbResults<TMDbEpisodeGroup>;
export type TMDbTvReviews = TMDbPaginated<TMDbReview>;
export type TMDbTvSeasonAccountStates = TMDbResults<TMDbAccountStates>;

export type TMDbRateTvRequestDTO = TMDbRateRequestDTO;

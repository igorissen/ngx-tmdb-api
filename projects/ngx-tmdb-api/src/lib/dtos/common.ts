import { Gender } from '../enums';
import { TMDbTvSeasonDetails } from './tv';

export type TMDbVideoType =
  | 'Trailer'
  | 'Teaser'
  | 'Clip'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Bloopers';

export type TMDbGenre = {
  id?: number;
  name?: string;
};
export type TMDbProductionCompany = {
  id?: number;
  name?: string;
  parent_company?: number;
  logo_path?: string;
  homepage?: string;
  headquarters?: string;
  description?: string;
};
export type TMDbProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};
export type TMDbSpokenLanguage = {
  iso_639_1?: string;
  name?: string;
};
export type TMDbAlternativeTitle = {
  iso_3166_1?: string;
  title?: string;
};
export type TMDbChangeItem = {
  id?: string;
  action?: string;
  time?: string;
  iso_639_1?: string;
  value?: any;
  original_value?: any;
};
export type TMDbChange = {
  key?: string;
  items?: TMDbChangeItem[];
};
export type TMDbChanges = {
  changes?: TMDbChange[];
};
export type TMDbRole = {
  credit_id?: string;
  character?: string;
  episode_count?: number;
};
export type TMDbJob = {
  credit_id?: string;
  job?: string;
  episode_count?: number;
};
export type TMDbCast = {
  cast_id?: number;
  character?: string;
  credit_id?: string;
  gender?: Gender;
  id?: number;
  name?: string;
  order?: number;
  profile_path?: string;
  release_date?: string;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  vote_average?: number;
  title?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
  original_name?: string;
  episode_count?: number;
  first_air_date?: string;
  origin_country?: string[];
  media_type?: string;
  known_for_department?: string;
  total_episode_count?: number;
  roles?: TMDbRole[];
};
export type TMDbCrew = {
  credit_id?: string;
  department?: string;
  gender?: Gender;
  id?: number;
  job?: string;
  name?: string;
  profile_path?: string;
  original_language?: string;
  original_tile?: string;
  overview?: string;
  vote_count?: number;
  video?: boolean;
  poster_path?: string;
  backdrop_path?: string;
  title?: string;
  popularity?: string;
  genre_ids?: number[];
  vote_average?: number;
  adult?: boolean;
  release_date?: string;
  episode_count?: number;
  origin_country?: string;
  original_name?: string;
  first_air_date?: string;
  media_type?: string;
  known_for_department?: string;
  total_episode_count?: string;
  jobs?: TMDbJob[];
};
export type TMDbExternalIds = {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
  id?: number;
};
export type TMDbImage = {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
  id?: string;
  file_type?: string;
};
export type TMDbMediaImages = {
  id?: number;
  backdrops?: TMDbImage[];
  posters?: TMDbImage[];
  logos?: TMDbImage[];
};
export type TMDbKeyword = {
  id?: number;
  name?: string;
};
export type TMDbMediaKeywords = {
  id?: number;
  keywords?: TMDbKeyword[];
};
export type TMDbReleaseDate = {
  certification?: string;
  iso_639_1?: string;
  note?: string;
  release_date?: string;
  type?: number;
};
export type TMDbVideo = {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  site?: string;
  size?: number;
  type?: TMDbVideoType;
};
export type TMDbMediaVideos = {
  id?: number;
  results?: TMDbVideo[];
};
export type TMDbTranslation = {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  english_name?: string;
};
export type TMDbMediaTranslations = {
  id?: number;
  translations?: TMDbTranslation[];
};
export type TMDbPaginated<T> = {
  page?: number;
  total_pages?: number;
  total_results?: number;
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  results?: T[];
};
export type TMDbResults<T> = {
  id?: number;
  results?: T[];
};
export type TMDbReview = {
  id?: string;
  author?: string;
  content?: string;
  url?: string;
  iso_639_1?: string;
  media_id?: number;
  media_title?: string;
  media_type?: string;
};
export type TMDbList = {
  description?: string;
  favorite_count?: number;
  id?: number;
  item_count?: number;
  iso_639_1?: string;
  list_type?: string;
  name?: string;
  poster_path?: string;
};
export type TMDbResponseStatus = {
  status_code: number;
  status_message: string;
};
export type TMDbWatchProvider = {
  display_priority?: number;
  logo_path?: string;
  provider_name?: string;
  provider_id?: number;
};
export type TMDbCountryWatchProviders = {
  link?: string;
  flatrate?: TMDbWatchProvider[];
  rent?: TMDbWatchProvider[];
  buy?: TMDbWatchProvider[];
};
export type TMDbNetwork = {
  id?: number;
  name?: string;
  logo_path?: string;
  origin_country?: string;
};
export type TMDbAccountStates = {
  id?: number;
  favorite?: boolean;
  watchlist?: boolean;
  rated?: boolean | { value?: number };
};
export type TMDbCredits = {
  id?: number;
  cast?: TMDbCast[];
  crew?: TMDbCrew[];
};
export type TMDbContentRating = {
  iso_3166_1?: string;
  rating?: string;
};
export type TMDbMediaWatchProviders = {
  id?: number;
  results?: {
    [country: string]: TMDbCountryWatchProviders;
  };
};
export type TMDbEpisodeGroup = {
  description?: string;
  episode_count?: number;
  group_count?: number;
  id?: string;
  name?: string;
  network?: TMDbNetwork;
  type?: number;
};
export type TMDbGravatar = {
  hash?: string;
};
export type TMDbAvatar = {
  gravatar?: TMDbGravatar;
};
export type TMDbCertification = {
  certification?: string;
  meaning?: string;
  order?: number;
};
export type TMDbMedia = {
  backdrop_path?: string;
  genres?: TMDbGenre[];
  homepage?: string;
  id?: number;
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: TMDbProductionCompany[];
  status?: string;
  vote_average?: number;
  vote_count?: number;
};

export type TMDbRateRequestDTO = {
  value: number;
};

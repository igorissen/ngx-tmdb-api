import { HttpHeaders } from '@angular/common/http';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type QueryParameters = {
  api_key: string;
  language?: string;
  append_to_response?: string;
  session_id?: string;
  guest_session_id?: string;
  country?: string;
  page?: number;
  start_date?: string;
  end_date?: string;
  include_image_language?: string;
  include_video?: boolean;
  include_adult?: boolean;
  region?: string;
  watch_region?: string;
  sort_by?: string;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  with_original_language?: string;
  'with_runtime.lte'?: number;
  'with_runtime.gte'?: number;
  without_keywords?: string;
  with_keywords?: string;
  without_genres?: string;
  with_genres?: string;
  with_companies?: string;
  with_people?: string;
  with_crew?: string;
  with_cast?: string;
  'vote_average.lte'?: number;
  'vote_average.gte'?: number;
  'vote_count.lte'?: number;
  'vote_count.gte'?: number;
  'release_date.lte'?: string;
  'release_date.gte'?: string;
  with_release_type?: number;
  year?: number;
  'primary_release_date.lte'?: string;
  'primary_release_date.gte'?: string;
  primary_release_year?: number;
  certification?: string;
  'certification.lte'?: string;
  'certification.gte'?: string;
  certification_country?: string;
  'air_date.lte'?: string;
  'air_date.gte'?: string;
  'first_air_date.lte'?: string;
  'first_air_date.gte'?: string;
  first_air_date_year?: number;
  timezone?: string;
  with_networks?: string;
  include_null_first_air_dates?: boolean;
  screened_theatrically?: boolean;
  external_source?: string;
};

export type PathParameters = {
  movie_id?: number | string;
  tv_id?: number | string;
  account_id?: number | string;
  collection_id?: number | string;
  company_id?: number | string;
  credit_id?: number | string;
  external_id?: number | string;
};

export type RequestOptions<T> = {
  pathParams?: PathParameters;
  queryParams?: QueryParameters;
  payload?: T;
  version?: string;
  path?: string;
  headers?: HttpHeaders;
  method?: HttpMethod;
};

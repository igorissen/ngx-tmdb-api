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
  region?: string;
  watch_region?: string;
  sort_by?: string;
};

export type PathParameters = {
  movie_id?: number | string;
  tv_id?: number | string;
  account_id?: number | string;
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

import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import {
  TMDbAddMovieRequestDTO,
  TMDbRemoveMovieRequestDTO
} from '../../dtos/lists';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const addMovie = (
  options: RequestOptions<TMDbAddMovieRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbAddMovieRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/list/${options.pathParams?.list_id}/add_item`
  }).execute();
};

export const removeMovie = (
  options: RequestOptions<TMDbRemoveMovieRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbRemoveMovieRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/list/${options.pathParams?.list_id}/remove_item`
  }).execute();
};

import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import {
  TMDbCreateListRequestDTO,
  TMDbListCreateStatus
} from '../../dtos/lists';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const createList = (
  options: RequestOptions<TMDbCreateListRequestDTO>
): Observable<TMDbListCreateStatus | null> => {
  return new Request<TMDbCreateListRequestDTO, TMDbListCreateStatus>({
    ...options,
    method: 'POST',
    path: `/list`
  }).execute();
};

export const clearList = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/list/${options.pathParams?.list_id}/clear`
  }).execute();
};

export const deleteList = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'DELETE',
    path: `/list/${options.pathParams?.list_id}`
  }).execute();
};

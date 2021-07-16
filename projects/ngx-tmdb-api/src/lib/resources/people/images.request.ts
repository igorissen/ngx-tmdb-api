import { Observable } from 'rxjs';
import { TMDbMediaImages } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbMediaImages | null> => {
  return new Request<never, TMDbMediaImages>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/images`
  }).execute();
};

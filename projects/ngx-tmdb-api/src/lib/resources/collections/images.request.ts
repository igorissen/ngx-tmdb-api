import { Observable } from 'rxjs';
import { TMDbCollectionImages } from '../../dtos/collections';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbCollectionImages | null> => {
  return new Request<never, TMDbCollectionImages>({
    ...options,
    path: `/collection/${options.pathParams?.collection_id}/images`
  }).execute();
};

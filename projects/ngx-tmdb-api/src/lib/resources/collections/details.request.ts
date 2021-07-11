import { Observable } from 'rxjs';
import { TMDbCollectionDetails } from '../../dtos/collections';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbCollectionDetails | null> => {
  return new Request<never, TMDbCollectionDetails>({
    ...options,
    path: `/collection/${options.pathParams?.collection_id}`
  }).execute();
};

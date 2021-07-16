import { Observable } from 'rxjs';
import { TMDbSearchCollections } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchCollections = (
  options: RequestOptions<never>
): Observable<TMDbSearchCollections | null> => {
  return new Request<never, TMDbSearchCollections>({
    ...options,
    path: '/search/collection'
  }).execute();
};

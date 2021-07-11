import { Observable } from 'rxjs';
import { TMDbCollectionTranslations } from '../../dtos/collections';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTranslations = (
  options: RequestOptions<never>
): Observable<TMDbCollectionTranslations | null> => {
  return new Request<never, TMDbCollectionTranslations>({
    ...options,
    path: `/collection/${options.pathParams?.collection_id}/translations`
  }).execute();
};

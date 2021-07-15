import { Observable } from 'rxjs';
import { TMDbListDetails } from '../../dtos/lists';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbListDetails | null> => {
  return new Request<never, TMDbListDetails>({
    ...options,
    path: `/list/${options.pathParams?.list_id}`
  }).execute();
};

import { Observable } from 'rxjs';
import { TMDbFindResults } from '../../dtos/find';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const byId = (
  options: RequestOptions<never>
): Observable<TMDbFindResults | null> => {
  return new Request<never, TMDbFindResults>({
    ...options,
    path: `/find/${options.pathParams?.external_id}`
  }).execute();
};

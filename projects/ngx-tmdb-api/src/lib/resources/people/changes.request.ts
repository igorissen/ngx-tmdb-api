import { Observable } from 'rxjs';
import { TMDbChanges } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getChanges = (
  options: RequestOptions<never>
): Observable<TMDbChanges | null> => {
  return new Request<never, TMDbChanges>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/changes`
  }).execute();
};

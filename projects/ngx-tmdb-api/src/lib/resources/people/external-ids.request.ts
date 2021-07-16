import { Observable } from 'rxjs';
import { TMDbExternalIds } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getExternalIds = (
  options: RequestOptions<never>
): Observable<TMDbExternalIds | null> => {
  return new Request<never, TMDbExternalIds>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/external_ids`
  }).execute();
};

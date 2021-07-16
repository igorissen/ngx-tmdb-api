import { Observable } from 'rxjs';
import { TMDbCredits } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTvCredits = (
  options: RequestOptions<never>
): Observable<TMDbCredits | null> => {
  return new Request<never, TMDbCredits>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/tv_credits`
  }).execute();
};

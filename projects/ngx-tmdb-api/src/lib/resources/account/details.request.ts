import { Observable } from 'rxjs';
import { TMDbAccountDetails } from '../../dtos/account';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbAccountDetails | null> => {
  return new Request<never, TMDbAccountDetails>({
    ...options,
    path: '/account'
  }).execute();
};

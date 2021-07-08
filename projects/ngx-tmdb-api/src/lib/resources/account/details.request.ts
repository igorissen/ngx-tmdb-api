/**
 * https://developers.themoviedb.org/3/account/get-account-details
 */

import { Observable } from 'rxjs';
import { TMDbAccountDetails } from '../../dtos/account';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchAccountDetails = (
  options: RequestOptions<never>
): Observable<TMDbAccountDetails | null> => {
  return new Request<never, TMDbAccountDetails>({
    ...options,
    path: '/account'
  }).execute();
};

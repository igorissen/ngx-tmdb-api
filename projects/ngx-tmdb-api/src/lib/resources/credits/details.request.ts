import { Observable } from 'rxjs';
import { TMDbCreditDetails } from '../../dtos/credits';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbCreditDetails | null> => {
  return new Request<never, TMDbCreditDetails>({
    ...options,
    path: `/credit/${options.pathParams?.credit_id}`
  }).execute();
};

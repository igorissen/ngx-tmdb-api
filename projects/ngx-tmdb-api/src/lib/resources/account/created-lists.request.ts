import { Observable } from 'rxjs';
import { TMDbAccountCreatedLists } from '../../dtos/account';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getCreatedLists = (
  options: RequestOptions<never>
): Observable<TMDbAccountCreatedLists | null> => {
  return new Request<never, TMDbAccountCreatedLists>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/lists`
  }).execute();
};

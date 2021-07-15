import { Observable } from 'rxjs';
import { TMDbKeywordDetails } from '../../dtos/keywords';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbKeywordDetails | null> => {
  return new Request<never, TMDbKeywordDetails>({
    ...options,
    path: `/keyword/${options.pathParams?.keyword_id}`
  }).execute();
};

import { Observable } from 'rxjs';
import { TMDbPeopleDetails } from '../../dtos/people';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbPeopleDetails | null> => {
  return new Request<never, TMDbPeopleDetails>({
    ...options,
    path: `/person/${options.pathParams?.person_id}`
  }).execute();
};

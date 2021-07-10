import { Observable } from 'rxjs';
import { TMDbChangeList } from '../../dtos/changes';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getPersonChangeList = (
  options: RequestOptions<never>
): Observable<TMDbChangeList | null> => {
  return new Request<never, TMDbChangeList>({
    ...options,
    path: `/person/changes`
  }).execute();
};

import { Observable } from 'rxjs';
import { TMDbConfiguration } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getApiConfiguration = (
  options: RequestOptions<never>
): Observable<TMDbConfiguration | null> => {
  return new Request<never, TMDbConfiguration>({
    ...options,
    path: '/configuration'
  }).execute();
};

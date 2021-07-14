import { Observable } from 'rxjs';
import { TMDbConfigurationLanguages } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getLanguages = (
  options: RequestOptions<never>
): Observable<TMDbConfigurationLanguages | null> => {
  return new Request<never, TMDbConfigurationLanguages>({
    ...options,
    path: '/configuration/languages'
  }).execute();
};

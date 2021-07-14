import { Observable } from 'rxjs';
import { TMDbConfigurationTimezones } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTimezones = (
  options: RequestOptions<never>
): Observable<TMDbConfigurationTimezones | null> => {
  return new Request<never, TMDbConfigurationTimezones>({
    ...options,
    path: '/configuration/timezones'
  }).execute();
};

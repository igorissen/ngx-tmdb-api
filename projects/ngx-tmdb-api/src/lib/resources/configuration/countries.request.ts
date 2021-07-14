import { Observable } from 'rxjs';
import { TMDbConfigurationCountries } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getCountries = (
  options: RequestOptions<never>
): Observable<TMDbConfigurationCountries | null> => {
  return new Request<never, TMDbConfigurationCountries>({
    ...options,
    path: '/configuration/countries'
  }).execute();
};

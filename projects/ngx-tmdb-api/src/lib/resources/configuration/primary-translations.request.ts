import { Observable } from 'rxjs';
import { TMDbConfigurationPrimaryTranslations } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getPrimaryTranslations = (
  options: RequestOptions<never>
): Observable<TMDbConfigurationPrimaryTranslations | null> => {
  return new Request<never, TMDbConfigurationPrimaryTranslations>({
    ...options,
    path: '/configuration/primary_translations'
  }).execute();
};

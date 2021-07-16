import { Observable } from 'rxjs';
import { TMDbMediaTranslations } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTranslations = (
  options: RequestOptions<never>
): Observable<TMDbMediaTranslations | null> => {
  return new Request<never, TMDbMediaTranslations>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/translations`
  }).execute();
};

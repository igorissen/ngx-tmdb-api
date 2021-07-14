import { Observable } from 'rxjs';
import { TMDbCompanyAlternativeNames } from '../../dtos/companies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAlternativeNames = (
  options: RequestOptions<never>
): Observable<TMDbCompanyAlternativeNames | null> => {
  return new Request<never, TMDbCompanyAlternativeNames>({
    ...options,
    path: `/company/${options.pathParams?.company_id}/alternative_names`
  }).execute();
};

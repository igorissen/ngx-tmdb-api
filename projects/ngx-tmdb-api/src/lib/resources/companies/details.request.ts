import { Observable } from 'rxjs';
import { TMDbCompanyDetails } from '../../dtos/companies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbCompanyDetails | null> => {
  return new Request<never, TMDbCompanyDetails>({
    ...options,
    path: `/company/${options.pathParams?.company_id}`
  }).execute();
};

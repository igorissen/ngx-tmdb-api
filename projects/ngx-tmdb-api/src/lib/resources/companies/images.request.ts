import { Observable } from 'rxjs';
import { TMDbCompanyImages } from '../../dtos/companies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbCompanyImages | null> => {
  return new Request<never, TMDbCompanyImages>({
    ...options,
    path: `/company/${options.pathParams?.company_id}/images`
  }).execute();
};

import { Observable } from 'rxjs';
import { TMDbSearchCompanies } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchCompanies = (
  options: RequestOptions<never>
): Observable<TMDbSearchCompanies | null> => {
  return new Request<never, TMDbSearchCompanies>({
    ...options,
    path: '/search/company'
  }).execute();
};

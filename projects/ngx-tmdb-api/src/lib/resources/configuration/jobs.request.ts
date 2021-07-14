import { Observable } from 'rxjs';
import { TMDbConfigurationJobs } from '../../dtos/configuration';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getJobs = (
  options: RequestOptions<never>
): Observable<TMDbConfigurationJobs | null> => {
  return new Request<never, TMDbConfigurationJobs>({
    ...options,
    path: '/configuration/jobs'
  }).execute();
};

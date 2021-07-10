import { Observable } from 'rxjs';
import { TMDbCertificationTvCertifications } from '../../dtos/certifications';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTvShowCertifications = (
  options: RequestOptions<never>
): Observable<TMDbCertificationTvCertifications | null> => {
  return new Request<never, TMDbCertificationTvCertifications>({
    ...options,
    path: '/certification/tv/list'
  }).execute();
};

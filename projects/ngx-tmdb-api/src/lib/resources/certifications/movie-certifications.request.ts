import { Observable } from 'rxjs';
import { TMDbCertificationMovieCertifications } from '../../dtos/certifications';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieCertificationsList = (
  options: RequestOptions<never>
): Observable<TMDbCertificationMovieCertifications | null> => {
  return new Request<never, TMDbCertificationMovieCertifications>({
    ...options,
    path: '/certification/movie/list'
  }).execute();
};

import { Observable } from 'rxjs';
import {
  TMDbAuthentication,
  TMDbCreateSessionWithLoginRequestDTO
} from '../../dtos/authentication';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const createRequestToken = (
  options: RequestOptions<never>
): Observable<TMDbAuthentication | null> => {
  return new Request<never, TMDbAuthentication>({
    ...options,
    path: '/authentication/token/new'
  }).execute();
};

export const createSessionWithLogin = (
  options: RequestOptions<TMDbCreateSessionWithLoginRequestDTO>
): Observable<TMDbAuthentication | null> => {
  return new Request<TMDbCreateSessionWithLoginRequestDTO, TMDbAuthentication>({
    ...options,
    method: 'POST',
    path: '/authentication/token/validate_with_login'
  }).execute();
};

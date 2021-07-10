import { Observable } from 'rxjs';
import {
  TMDbAuthentication,
  TMDbCreateSessionRequestDTO,
  TMDbCreateSessionFromV4SessionRequestDTO,
  TMDbDeleteSessionRequestDTO
} from '../../dtos/authentication';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const createSession = (
  options: RequestOptions<TMDbCreateSessionRequestDTO>
): Observable<TMDbAuthentication | null> => {
  return new Request<TMDbCreateSessionRequestDTO, TMDbAuthentication>({
    ...options,
    method: 'POST',
    path: '/authentication/session/new'
  }).execute();
};

export const createSessionFromV4Session = (
  options: RequestOptions<TMDbCreateSessionFromV4SessionRequestDTO>
): Observable<TMDbAuthentication | null> => {
  return new Request<
    TMDbCreateSessionFromV4SessionRequestDTO,
    TMDbAuthentication
  >({
    ...options,
    method: 'POST',
    path: '/authentication/session/convert/4'
  }).execute();
};

export const deleteSession = (
  options: RequestOptions<TMDbDeleteSessionRequestDTO>
): Observable<TMDbAuthentication | null> => {
  return new Request<TMDbDeleteSessionRequestDTO, TMDbAuthentication>({
    ...options,
    method: 'DELETE',
    path: '/authentication/token/validate_with_login'
  }).execute();
};

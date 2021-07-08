import { Observable } from 'rxjs';
import { TMDbAuthentication } from "../../dtos/authentication";
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const createGuestSession = (
  options: RequestOptions<never>
): Observable<TMDbAuthentication | null> => {
  return new Request<never, TMDbAuthentication>({
    ...options,
    path: '/authentication/guest_session/new'
  }).execute();
};

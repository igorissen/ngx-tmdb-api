import { Observable } from 'rxjs';
import { TMDbGuestSessionsRatedMovies } from '../../dtos/guest-sessions';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getRatedMovies = (
  options: RequestOptions<never>
): Observable<TMDbGuestSessionsRatedMovies | null> => {
  return new Request<never, TMDbGuestSessionsRatedMovies>({
    ...options,
    path: `/guest_session/${options.pathParams?.guest_session_id}/rated/movies`
  }).execute();
};

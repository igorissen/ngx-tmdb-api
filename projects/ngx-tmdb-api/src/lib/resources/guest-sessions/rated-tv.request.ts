import { Observable } from 'rxjs';
import { TMDbGuestSessionsRatedTvShows } from '../../dtos/guest-sessions';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getRatedTvShows = (
  options: RequestOptions<never>
): Observable<TMDbGuestSessionsRatedTvShows | null> => {
  return new Request<never, TMDbGuestSessionsRatedTvShows>({
    ...options,
    path: `/guest_session/${options.pathParams?.guest_session_id}/rated/tv`
  }).execute();
};

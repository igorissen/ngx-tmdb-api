import { Observable } from 'rxjs';
import { TMDbGuestSessionsRatedTvEpisodes } from '../../dtos/guest-sessions';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getRatedTvEpisodes = (
  options: RequestOptions<never>
): Observable<TMDbGuestSessionsRatedTvEpisodes | null> => {
  return new Request<never, TMDbGuestSessionsRatedTvEpisodes>({
    ...options,
    path: `/guest_session/${options.pathParams?.guest_session_id}/rated/tv/episodes`
  }).execute();
};

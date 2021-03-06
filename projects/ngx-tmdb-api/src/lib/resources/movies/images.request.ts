import { Observable } from 'rxjs';
import { TMDbMovieImages } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbMovieImages | null> => {
  return new Request<never, TMDbMovieImages>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/images`
  }).execute();
};

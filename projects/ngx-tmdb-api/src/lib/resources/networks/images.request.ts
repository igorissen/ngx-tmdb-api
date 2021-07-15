import { Observable } from 'rxjs';
import { TMDbNetworkImages } from '../../dtos/networks';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbNetworkImages | null> => {
  return new Request<never, TMDbNetworkImages>({
    ...options,
    path: `/network/${options.pathParams?.network_id}/images`
  }).execute();
};

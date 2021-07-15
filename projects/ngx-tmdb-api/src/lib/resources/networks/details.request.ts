import { Observable } from 'rxjs';
import { TMDbNetworkDetails } from '../../dtos/networks';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbNetworkDetails | null> => {
  return new Request<never, TMDbNetworkDetails>({
    ...options,
    path: `/network/${options.pathParams?.network_id}`
  }).execute();
};

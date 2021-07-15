import { Observable } from 'rxjs';
import { TMDbNetworkAlternativeNames } from '../../dtos/networks';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAlternativeNames = (
  options: RequestOptions<never>
): Observable<TMDbNetworkAlternativeNames | null> => {
  return new Request<never, TMDbNetworkAlternativeNames>({
    ...options,
    path: `/network/${options.pathParams?.network_id}/alternative_names`
  }).execute();
};

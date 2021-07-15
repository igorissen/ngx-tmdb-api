import { Observable } from 'rxjs';
import { TMDbListItemStatus } from '../../dtos/lists';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const checkItemStatus = (
  options: RequestOptions<never>
): Observable<TMDbListItemStatus | null> => {
  return new Request<never, TMDbListItemStatus>({
    ...options,
    path: `/list/${options.pathParams?.list_id}/item_status`
  }).execute();
};

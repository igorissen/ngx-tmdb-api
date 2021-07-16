import { Observable } from 'rxjs';
import { TMDbPeopleTaggedImages } from '../../dtos/people';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTaggedImages = (
  options: RequestOptions<never>
): Observable<TMDbPeopleTaggedImages | null> => {
  return new Request<never, TMDbPeopleTaggedImages>({
    ...options,
    path: `/person/${options.pathParams?.person_id}/tagged_images`
  }).execute();
};

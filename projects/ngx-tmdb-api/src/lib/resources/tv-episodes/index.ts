import { getDetails } from './details.request';
import { getAccountStates } from './account-states.request';
import { getChanges } from './changes.request';
import { getCredits } from './credits.request';
import { getExternalIds } from './external-ids.request';
import { getImages } from './images.request';
import { deleteRating, rateTvEpisode } from './rating.request';
import { getTranslations } from './translations.request';
import { getVideos } from './videos.request';

export const TvEpisodes = {
  getDetails,
  getAccountStates,
  getChanges,
  getCredits,
  getExternalIds,
  getImages,
  rateTvEpisode,
  deleteRating,
  getTranslations,
  getVideos
};

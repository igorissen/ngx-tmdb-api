import { getDetails } from './details.request';
import { getChanges } from './changes.request';
import { getMovieCredits } from './movie-credits.request';
import { getTvCredits } from './tv-credits.request';
import { getCombinedCredits } from './combined-credits.request';
import { getExternalIds } from './external-ids.request';
import { getImages } from './images.request';
import { getTaggedImages } from './tagged-images.request';
import { getTranslations } from './translations.request';
import { getLatest } from './latest.request';
import { getPopular } from './popular.request';

export const People = {
  getDetails,
  getChanges,
  getMovieCredits,
  getTvCredits,
  getCombinedCredits,
  getExternalIds,
  getImages,
  getTaggedImages,
  getTranslations,
  getLatest,
  getPopular
};

import { getAccountStates } from './account-states.request';
import { getAlternativeTitles } from './alternative-titles.request';
import { getChanges } from './changes.request';
import { getCredits } from './credits.request';
import { getDetails } from './details.request';
import { getExternalIds } from './external-ids.request';
import { getImages } from './images.request';
import { getKeywords } from './keywords.request';
import { getLatest } from './latest.request';
import { getLists } from './lists.request';
import { getNowPlaying } from './now-playing.request';
import { getPopular } from './popular.request';
import { rateMovie, deleteRating } from './rating.request';
import { getRecommendations } from './recommendations.request';
import { getReleaseDates } from './release-dates.request';
import { getReviews } from './reviews.request';
import { getSimilarMovies } from './similar.request';
import { getTopRated } from './top-rated.request';
import { getTranslations } from './translations.request';
import { getUpcoming } from './upcoming.request';
import { getVideos } from './videos.request';
import { getWatchProviders } from './watch-providers.request';

export const Movies = {
  getAccountStates,
  getAlternativeTitles,
  getChanges,
  getCredits,
  getDetails,
  getExternalIds,
  getImages,
  getKeywords,
  getLatest,
  getLists,
  getNowPlaying,
  getPopular,
  rateMovie,
  deleteRating,
  getRecommendations,
  getReleaseDates,
  getReviews,
  getSimilarMovies,
  getTopRated,
  getTranslations,
  getUpcoming,
  getVideos,
  getWatchProviders
};

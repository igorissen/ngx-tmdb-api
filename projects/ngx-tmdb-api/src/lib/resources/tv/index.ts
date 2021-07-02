import { fetchTvAccountStates } from './account-states.request';
import { fetchTvAggregateCredits } from './aggregate-credits.request';
import { fetchAiringTodayTvShows } from './airing-today.request';
import { fetchTvAlternativeTitles } from './alternative-titles.request';
import { fetchTvChanges } from './changes.request';
import { fetchTvContentRatings } from './content-ratings.request';
import { fetchTvCredits } from './credits.request';
import { fetchTvDetails } from './details.request';
import { fetchTvEpisodeGroups } from './episode-groups.request';
import { fetchTvExternalIds } from './external-ids.request';
import { fetchTvImages } from './images.request';
import { fetchTvKeywords } from './keywords.request';
import { fetchLatestTvShow } from './latest.request';
import { fetchOnTheAirTvShows } from './on-the-air.request';
import { fetchPopularTvShows } from './popular.request';
import { rateTv } from './rating.request';
import { deleteTvRating } from './rating.request';
import { fetchTvRecommendations } from './recommendations.request';
import { fetchTvScreenedTheatrically } from './screened-theatrically.request';
import { fetchTvSimilar } from './similar.request';
import { fetchTopRatedTvShows } from './top-rated.request';
import { fetchTvTranslations } from './translations.request';
import { fetchTvVideos } from './videos.request';
import { fetchTvWatchProviders } from './watch-providers.request';

export const TV = {
  fetchTvAccountStates,
  fetchTvAggregateCredits,
  fetchAiringTodayTvShows,
  fetchTvAlternativeTitles,
  fetchTvChanges,
  fetchTvContentRatings,
  fetchTvCredits,
  fetchTvDetails,
  fetchTvEpisodeGroups,
  fetchTvExternalIds,
  fetchTvImages,
  fetchTvKeywords,
  fetchLatestTvShow,
  fetchOnTheAirTvShows,
  fetchPopularTvShows,
  rateTv,
  deleteTvRating,
  fetchTvRecommendations,
  fetchTvScreenedTheatrically,
  fetchTvSimilar,
  fetchTopRatedTvShows,
  fetchTvTranslations,
  fetchTvVideos,
  fetchTvWatchProviders
};

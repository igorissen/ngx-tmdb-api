import { TMDbMovieDetails } from './movies';
import { TMDbPeopleDetails } from './people';
import { TMDbTvDetails, TMDbTvEpisodeDetails, TMDbTvSeasonDetails } from './tv';

export type TMDbFindResults = {
  movie_results?: TMDbMovieDetails[];
  person_results?: TMDbPeopleDetails[];
  tv_results?: TMDbTvDetails[];
  tv_episode_results?: TMDbTvEpisodeDetails[];
  tv_season_results?: TMDbTvSeasonDetails[];
};

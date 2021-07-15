import { TMDbPeopleDetails } from './people';
import { TMDbTvEpisodeDetails, TMDbTvSeasonDetails } from './tv';

export type TMDbCreditDetails = {
  credit_type?: string;
  department?: string;
  job?: string;
  id?: string;
  media_type?: string;
  person?: TMDbPeopleDetails;
  media?: TMDbCreditMediaObject;
};
export type TMDbCreditMediaObject = {
  id?: number;
  name?: string;
  original_name?: string;
  character?: string;
  episodes?: TMDbTvEpisodeDetails[];
  seasons?: TMDbTvSeasonDetails[];
};

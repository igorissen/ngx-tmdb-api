import { TMDbMediaImages, TMDbNetwork, TMDbResults } from './common';

export type TMDbNetworkAlternativeName = {
  name?: string;
  type?: string;
};

export type TMDbNetworkAlternativeNames =
  TMDbResults<TMDbNetworkAlternativeName>;
export type TMDbNetworkImages = TMDbMediaImages;
export type TMDbNetworkDetails = TMDbNetwork;

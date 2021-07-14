import { TMDbMediaImages, TMDbResults } from './common';

export type TMDbCompanyDetails = {
  id?: number;
  name?: string;
  parent_company?: number;
  logo_path?: string;
  homepage?: string;
  headquarters?: string;
  description?: string;
  origin_country?: string;
};
export type TMDbCompanyAlternativeName = {
  name?: string;
  type?: string;
};

export type TMDbCompanyAlternativeNames =
  TMDbResults<TMDbCompanyAlternativeName>;
export type TMDbCompanyImages = TMDbMediaImages;

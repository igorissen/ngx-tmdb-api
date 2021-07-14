export type TMDbConfiguration = {
  images?: {
    base_url?: string;
    secure_base_url?: string;
    backdrop_sizes?: Array<string>;
    logo_sizes?: Array<string>;
    poster_sizes?: Array<string>;
    profile_sizes?: Array<string>;
    still_sizes?: Array<string>;
  };
  change_keys?: Array<string>;
};
export type TMDbConfigurationCountry = {
  iso_3166_1?: string;
  english_name?: string;
};
export type TMDbConfigurationJob = {
  department?: string;
  jobs?: string[];
};
export type TMDbConfigurationLanguage = {
  iso_639_1?: string;
  english_name?: string;
  name?: string;
};
export type TMDbConfigurationTimezone = {
  iso_3166_1?: string;
  zones?: string[];
};

export type TMDbConfigurationCountries = TMDbConfigurationCountry[];
export type TMDbConfigurationJobs = TMDbConfigurationJob[];
export type TMDbConfigurationLanguages = TMDbConfigurationLanguage[];
export type TMDbConfigurationPrimaryTranslations = string[];
export type TMDbConfigurationTimezones = TMDbConfigurationTimezone[];

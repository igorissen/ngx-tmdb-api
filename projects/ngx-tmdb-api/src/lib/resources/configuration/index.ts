import { getApiConfiguration } from './api-configuration.request';
import { getCountries } from './countries.request';
import { getJobs } from './jobs.request';
import { getLanguages } from './languages.request';
import { getPrimaryTranslations } from './primary-translations.request';
import { getTimezones } from './timezones.request';

export const Configuration = {
  getApiConfiguration,
  getCountries,
  getJobs,
  getLanguages,
  getPrimaryTranslations,
  getTimezones
};

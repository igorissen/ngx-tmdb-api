import { NgxTmdbApiOptions } from '../types/module-options';

export class NgxTmdbApiConfig {
  baseUrl: string;
  version: number;
  language: string;
  apiKey: string;

  constructor(options: NgxTmdbApiOptions) {
    this.baseUrl = options.baseUrl ?? 'https://api.themoviedb.org';
    this.version = options.version ?? 3;
    this.language = options.language ?? 'en';
    this.apiKey = options.apiKey;
  }
}

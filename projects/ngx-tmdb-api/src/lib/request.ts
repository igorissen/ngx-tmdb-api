import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { appInjector } from './app.injector';
import { NgxTmdbApiConfig } from './models';
import { HttpMethod, RequestOptions, QueryParameters } from './types';

export class Request<RequestDTO, ResponseDTO> {
  private _headers: HttpHeaders;
  private readonly _basePath: string;
  private readonly _method: HttpMethod;
  private readonly _path: string;
  private readonly _httpClient: HttpClient;
  private readonly _payload: RequestDTO | null;
  private readonly _queryParams: QueryParameters | null;

  constructor(options?: RequestOptions<RequestDTO>) {
    const ngxTmdbApiConfig = appInjector().get(NgxTmdbApiConfig);
    this._httpClient = appInjector().get(HttpClient);
    this._basePath = `${ngxTmdbApiConfig.baseUrl}/${ngxTmdbApiConfig.version}`;
    this._queryParams = options?.queryParams ?? {
      language: ngxTmdbApiConfig.language,
      api_key: ngxTmdbApiConfig.apiKey
    };
    this._payload = options?.payload ?? null;
    this._method = options?.method ?? 'GET';
    this._headers = options?.headers ?? new HttpHeaders();
    this._path = options?.path ?? '';
  }

  public execute(): Observable<ResponseDTO | null> {
    const url = this._basePath + this._path + this._queryString();
    return this._httpClient
      .request<ResponseDTO>(this._method, url, {
        body: this._payload,
        headers: this._headers,
        observe: 'response',
        responseType: 'json'
      })
      .pipe(
        first(),
        map((response: HttpResponse<ResponseDTO>) => response.body)
      );
  }

  private _queryString(): string {
    if (!this._queryParams) {
      return '';
    }

    let queryString;

    queryString = Object.keys(this._queryParams)
      // @ts-ignore
      .map(key => `${key}=${this._queryParams[key]}`)
      .join('&');

    if (queryString?.length) {
      queryString = '?' + queryString;
    }

    return queryString;
  }
}

# ngx-tmdb-api

Angular wrapper library for [TheMovieDatabase API](https://developers.themoviedb.org/3/getting-started/introduction).

<span style="color: red;"><strong>NOTE</strong>: Only version 3 of the API is implemented.</span>

## Getting started

### Installation

```
$ npm i -E @igorissen/ngx-tmdb-api
```

### Usage

Import `NgxTmdbApiModule` in your AppModule and configure it with your [TheMovieDatabase API key](https://www.themoviedb.org/settings/api).

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgxTmdbApiModule.forRoot({ apiKey: 'YOUR_API_KEY_HERE' })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Please refer to [TheMovieDatabase API documentation](https://developers.themoviedb.org/3/getting-started) for path and query parameters name.

```typescript
import { Component, OnInit } from '@angular/core';
import { Movies } from '@igorissen/ngx-tmdb-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    Movies.getDetails({
      pathParams: { movie_id: '384018' },
      queryParams: { language: 'FR', append_to_response: 'videos,images' }
    }).subscribe(console.log);
  }
}
```

### Available Resources

#### v3

- [Account](https://developers.themoviedb.org/3/account)
- [Authentication](https://developers.themoviedb.org/3/authentication)
- [Certifications](https://developers.themoviedb.org/3/certifications)
- [Changes](https://developers.themoviedb.org/3/changes)
- [Collections](https://developers.themoviedb.org/3/collections)
- [Companies](https://developers.themoviedb.org/3/companies)
- [Configuration](https://developers.themoviedb.org/3/configuration)
- [Credits](https://developers.themoviedb.org/3/credits)
- [Discover](https://developers.themoviedb.org/3/discover)
- [Find](https://developers.themoviedb.org/3/find)
- [Genres](https://developers.themoviedb.org/3/genres)
- [Guest Sessions](https://developers.themoviedb.org/3/guest-sessions)
- [Keywords](https://developers.themoviedb.org/3/keywords)
- [Lists](https://developers.themoviedb.org/3/lists)
- [Movies](https://developers.themoviedb.org/3/movies)
- [Networks](https://developers.themoviedb.org/3/networks)
- [Trending](https://developers.themoviedb.org/3/trending)
- [People](https://developers.themoviedb.org/3/people)
- [Reviews](https://developers.themoviedb.org/3/reviews)
- [Search](https://developers.themoviedb.org/3/search)
- [TV](https://developers.themoviedb.org/3/tv)
- [TV Seasons](https://developers.themoviedb.org/3/tv-seasons)
- [TV Episodes](https://developers.themoviedb.org/3/tv-episodes)
- [TV Episode Groups](https://developers.themoviedb.org/3/tv-episode-groups)
- [Watch Providers](https://developers.themoviedb.org/3/watch-providers)

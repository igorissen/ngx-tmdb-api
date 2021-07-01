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

Now you can import available resources and fetch the data you need. <span style="color: red;">Only MOVIES resource is available</span>

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
    Movies.fetchMovieDetails({
      pathParams: { movie_id: '384018' },
      queryParams: { language: 'FR', append_to_response: 'videos,images' }
    }).subscribe(console.log);
  }
}
```

## Roadmap

### v3

- [] Add `Account` resources
- [] Add `Authentication` resources
- [] Add `Certifications` resources
- [] Add `Changes` resources
- [] Add `Collections` resources
- [] Add `Companies` resources
- [] Add `Configuration` resources
- [] Add `Credits` resources
- [] Add `Discover` resources
- [] Add `Find` resources
- [] Add `Genres` resources
- [] Add `Guest Sessions` resources
- [] Add `Keywords` resources
- [] Add `Lists` resources
- [x] Add [Movies](https://developers.themoviedb.org/3/movies/get-movie-details) resources
- [] Add `Networks` resources
- [] Add `Trending` resources
- [] Add `People` resources
- [] Add `Reviews` resources
- [] Add `Search` resources
- [] Add `TV` resources
- [] Add `TV Seasons` resources
- [] Add `TV Episodes` resources
- [] Add `TV Episode Groups` resources
- [] Add `Watch Providers` resources



### v4

- [] Add `Account` resources
- [] Add `Auth` resources
- [] Add `List` resources

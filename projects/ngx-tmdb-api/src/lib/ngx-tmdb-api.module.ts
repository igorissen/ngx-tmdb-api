import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  Injector,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { AppInjectorInitializerFactory } from './app-injector-initializer.factory';
import { NgxTmdbApiConfig } from './models';
import { NgxTmdbApiOptions } from './types/module-options';

@NgModule({
  imports: [HttpClientModule]
})
export class NgxTmdbApiModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxTmdbApiModule) {
    if (parentModule) {
      throw new Error(
        'NgxTmdbApiModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  public static forRoot(
    options: NgxTmdbApiOptions
  ): ModuleWithProviders<NgxTmdbApiModule> {
    return {
      ngModule: NgxTmdbApiModule,
      providers: [
        {
          provide: NgxTmdbApiConfig,
          useValue: new NgxTmdbApiConfig(options)
        },
        {
          deps: [Injector],
          multi: true,
          provide: APP_INITIALIZER,
          useFactory: AppInjectorInitializerFactory
        }
      ]
    };
  }
}

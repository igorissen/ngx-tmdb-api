import { Injector } from '@angular/core';

let AppInjectorRef: Injector;

export const appInjector = (injector?: Injector): Injector => {
  if (injector) {
    AppInjectorRef = injector;
  }

  return AppInjectorRef;
};

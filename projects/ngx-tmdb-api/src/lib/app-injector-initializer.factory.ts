import { Injector } from '@angular/core';
import { appInjector } from './app.injector';

export function AppInjectorInitializerFactory(
  injector: Injector
): () => Promise<unknown> {
  return () => {
    return new Promise<unknown>(resolve => {
      appInjector(injector);
      resolve(null);
    });
  };
}

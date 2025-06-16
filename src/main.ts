import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initToolbar } from '@stagewise/toolbar';
import { AngularPlugin } from '@stagewise-plugins/angular';

// Only initialize in development mode (customize as needed)
if (!('production' in window) || !window.production) {
  initToolbar({
    plugins: [AngularPlugin]
  });
}


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

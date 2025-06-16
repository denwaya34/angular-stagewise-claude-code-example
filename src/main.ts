import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initToolbar } from '@stagewise/toolbar';
import { AngularPlugin } from '@stagewise-plugins/angular';

initToolbar({
  plugins: [AngularPlugin]
});


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

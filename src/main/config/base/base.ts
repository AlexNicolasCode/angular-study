import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './base.config';
import { AppComponent } from './base.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

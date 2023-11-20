import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './base.component';
import { config } from './base.config.server';

export const bootstrap = () => bootstrapApplication(AppComponent, config);
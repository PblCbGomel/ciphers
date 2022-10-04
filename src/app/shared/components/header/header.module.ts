import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';

import { HeaderComponent } from './header.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [HeaderComponent, SettingsComponent],
  imports: [SlideMenuModule, ButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

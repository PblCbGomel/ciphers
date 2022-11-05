import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { createTranslateLoader } from 'src/app/app.module';

import { HeaderComponent } from './header.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [HeaderComponent, SettingsComponent],
  imports: [
    SlideMenuModule,
    ButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

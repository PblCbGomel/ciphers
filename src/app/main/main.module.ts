import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { WelcomePageComponent } from '../shared/components/welcome-page/welcome-page.component';
import { ButtonModule } from 'primeng/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent, FooterComponent, WelcomePageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    ButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class MainModule {}

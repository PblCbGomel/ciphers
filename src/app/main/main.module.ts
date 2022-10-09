import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { WelcomePageComponent } from '../shared/components/welcome-page/welcome-page.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [MainComponent, FooterComponent, WelcomePageComponent],
  imports: [CommonModule, MainRoutingModule, HeaderModule, ButtonModule],
})
export class MainModule {}

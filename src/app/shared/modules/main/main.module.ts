import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [CommonModule, MainRoutingModule, HeaderModule],
})
export class MainModule {}

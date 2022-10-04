import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderModule } from '../shared/components/header/header.module';
@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [CommonModule, MainRoutingModule, HeaderModule],
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class MainModule {}

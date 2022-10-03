import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { SettingsComponent } from '../../components/header/settings/settings.component';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MenuModule,
    TieredMenuModule,
    PanelMenuModule,
  ],
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CiphersPanelComponent } from './ciphers-panel/ciphers-panel.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    CaesarCipherFormComponent,
    InputComponent,
    OutputComponent,
    CiphersPanelComponent,
  ],
  imports: [CommonModule, CipherRoutingModule, InputTextModule, ButtonModule],
})
export class CihperModule {}

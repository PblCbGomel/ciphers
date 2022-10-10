import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CiphersPanelComponent } from './ciphers-panel/ciphers-panel.component';
import { OutputComponent } from './output/output.component';
import { MorseCipherFormComponent } from './morse-cipher-form/morse-cipher-form.component';
import { TranspositionCipherFormComponent } from './transposition-cipher-form/transposition-cipher-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CaesarCipherFormComponent,
    InputComponent,
    OutputComponent,
    CiphersPanelComponent,
    MorseCipherFormComponent,
    TranspositionCipherFormComponent,
  ],
  imports: [
    CommonModule,
    CipherRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class CihperModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';
import { InputComponent } from './caesar-cipher-form/input/input.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [CaesarCipherFormComponent, InputComponent],
  imports: [CommonModule, CipherRoutingModule, InputTextModule],
})
export class CihperModule {}

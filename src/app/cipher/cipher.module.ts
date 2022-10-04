import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';
import { InputComponent } from './caesar-cipher-form/input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { OutputComponent } from './caesar-cipher-form/output/output.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CaesarCipherFormComponent, InputComponent, OutputComponent],
  imports: [CommonModule, CipherRoutingModule, InputTextModule, ButtonModule],
})
export class CihperModule {}

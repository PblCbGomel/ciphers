import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';

@NgModule({
  declarations: [CaesarCipherFormComponent],
  imports: [CommonModule, CipherRoutingModule],
})
export class CihperModule {}

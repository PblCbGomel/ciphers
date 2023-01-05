import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CipherRoutingModule } from './cipher-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CiphersPanelComponent } from './ciphers-panel/ciphers-panel.component';
import { MorseCipherFormComponent } from './morse-cipher-form/morse-cipher-form.component';
import { TranspositionCipherFormComponent } from './transposition-cipher-form/transposition-cipher-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../app.module';
import { ChangeByLanguagePipe } from '../shared/pipes/language-input.pipe';

@NgModule({
  declarations: [
    CaesarCipherFormComponent,
    CiphersPanelComponent,
    MorseCipherFormComponent,
    TranspositionCipherFormComponent,
    ChangeByLanguagePipe,
  ],
  imports: [
    CommonModule,
    CipherRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputNumberModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class CihperModule {}

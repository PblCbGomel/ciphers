import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';
import { CiphersPanelComponent } from './ciphers-panel/ciphers-panel.component';
import { MorseCipherFormComponent } from './morse-cipher-form/morse-cipher-form.component';
import { TranspositionCipherFormComponent } from './transposition-cipher-form/transposition-cipher-form.component';

const routes: Routes = [
  {
    path: '',
    component: CiphersPanelComponent,
    children: [
      { path: 'caesar', component: CaesarCipherFormComponent },
      { path: 'morse', component: MorseCipherFormComponent },
      { path: 'transposition', component: TranspositionCipherFormComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaesarCipherFormComponent } from './caesar-cipher-form/caesar-cipher-form.component';

const routes: Routes = [
  {
    path: '',
    component: CaesarCipherFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipherRoutingModule {}

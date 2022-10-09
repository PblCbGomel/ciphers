import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from '../shared/components/welcome-page/welcome-page.component';
import { MainComponent } from './component/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomePageComponent,
      },
      {
        path: 'cipher',
        loadChildren: () =>
          import('../cipher/cipher.module').then((m) => m.CihperModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

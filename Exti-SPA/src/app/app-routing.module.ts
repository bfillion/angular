import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent }      from './accueil/accueil.component';
import { ContactComponent }      from './contact/contact.component';
import { AProposComponent }      from './apropos/apropos.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
  },{
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'apropos',
    component: AProposComponent
  },
  {
      path: '',
      redirectTo: '/accueil',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/accueil',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

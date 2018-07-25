import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent }      from './accueil/accueil.component';
import { ContactComponent }      from './contact/contact.component';
import { AProposComponent }      from './apropos/apropos.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },{
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'apropos',
    component: AProposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

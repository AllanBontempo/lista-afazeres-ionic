import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdicionarMessageComponent} from './adicionar-message.component';


const routes: Routes = [
  {
    path: '',
    component: AdicionarMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarMessageRoutingModule {}

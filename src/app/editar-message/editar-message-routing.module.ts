import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditarMessageComponent} from './editar-message.component';


const routes: Routes = [
  {
    path: '',
    component: EditarMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}

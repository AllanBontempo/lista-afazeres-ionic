import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditarMessageComponent} from "./editar-message.component";
import {ViewMessagePageRoutingModule} from "./editar-message-routing.module";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [EditarMessageComponent],
  imports: [
    CommonModule, ViewMessagePageRoutingModule, IonicModule, ReactiveFormsModule
  ]
})
export class EditarMessageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdicionarMessageComponent} from './adicionar-message.component';
import {AdicionarMessageRoutingModule} from './adicionar-message-routing.module';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdicionarMessageComponent],
  imports: [
    CommonModule,
    AdicionarMessageRoutingModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class AdicionarMessageModule { }

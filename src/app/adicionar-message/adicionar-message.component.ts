import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService, Message} from "../services/data.service";

@Component({
  selector: 'app-adicionar-message',
  templateUrl: './adicionar-message.component.html',
  styleUrls: ['./adicionar-message.component.scss'],
})
export class AdicionarMessageComponent implements OnInit {

  public form: FormGroup;
  public editar = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      acoes: ['', Validators.required],
      referencias: ['', Validators.required],
      subject: ['', Validators.required],
    });

    if (this.editar) {

    }
  }


  adicionarMessage() {
    this.dataService.adicionarId();
    const message: Message = {
        fromName: this.form.controls['nome'].value,
        subject: this.form.controls['subject'].value,
        date: new Date().toISOString().split('T')[0],
        id: this.dataService.receberId(),
        read: false,
        valor: this.form.controls['valor'].value,
        acoes: this.form.controls['acoes'].value.split('\n'),
        referencias: this.form.controls['referencias'].value.split('\n'),
        descricao: this.form.controls['descricao'].value
    };

    this.dataService.setMessages(message);
  }

}

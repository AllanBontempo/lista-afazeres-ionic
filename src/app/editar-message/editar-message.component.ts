import { Component, OnInit } from '@angular/core';
import {DataService, Message} from "../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar-message',
  templateUrl: './editar-message.component.html',
  styleUrls: ['./editar-message.component.scss'],
})
export class EditarMessageComponent implements OnInit {

  message!: Message;
  form: FormGroup;
  id!: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.data.getMessageById(parseInt(this.id, 10));

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      acoes: ['', Validators.required],
      referencias: ['', Validators.required],
      subject: ['', Validators.required],
    });

    this.form.controls['nome'].setValue(this.message.fromName);
    this.form.controls['subject'].setValue(this.message.subject);

    this.form.controls['valor'].setValue(this.message.valor);
    this.form.controls['acoes'].setValue(this.message.acoes.join('\n'));
    this.form.controls['referencias'].setValue(this.message.referencias.join('\n'));
    this.form.controls['descricao'].setValue(this.message.descricao);


  }

  editar() {
    this.data.retirarItemParaEdicao(parseInt(this.id, 10));
    this.data.adicionarId();
    const message: Message = {
      fromName: this.form.controls['nome'].value,
      subject: this.form.controls['subject'].value,
      date: new Date().toISOString().split('T')[0],
      id: this.data.receberId(),
      read: false,
      valor: this.form.controls['valor'].value,
      acoes: this.form.controls['acoes'].value.split('\n'),
      referencias: this.form.controls['referencias'].value.split('\n'),
      descricao: this.form.controls['descricao'].value
    };

    console.log(this.data.receberId());
    console.log(message);
    this.data.setMessages(message);
  }

}

import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  valor: number;
  acoes: string[];
  referencias: string[];
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public id = 4;

  public messages: Message[] = [
    {
      fromName: 'Aplicativo Android',
      subject: 'Fazer um aplicativo android',
      date: '9:32 AM',
      valor: 0,
      descricao: 'Criar um aplicativo android para a aula do Lucas Martins',
      acoes: ['Criar app no IONIC', 'Novo projeto', 'Criar um projeto de afazeres'],
      referencias: ['www.ionicframework.com/docs/cli'],
      id: 0,
      read: false
    },
    {
      fromName: 'Lâmpada Inteligente',
      subject: 'Comprar lâmpada inteligente',
      descricao: 'Criação de sistema para acender e apagar lâmpadas utilizando um servidor web e Arduino',
      date: '6:12 AM',
      id: 1,
      valor: 370.00,
      acoes: ['estudar como fazer o projeto', 'montar o projeto de hardware', 'desenvolver o software', 'realizar os testes'],
      referencias: ['www.arduino.io', 'www.blabla.com', 'www.blabla22.com'],
      read: false
    },
    {
      fromName: 'Outro projeto',
      subject: 'Outro projeto',
      descricao: 'Sem descrição',
      valor: 0,
      acoes: ['Definir outro projeto para portfólio'],
      referencias: ['Nenhuma no momento'],
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Mais um projeto',
      subject: 'Outro projeto',
      descricao: 'Sistema de arduíno',
      valor: 100,
      acoes: ['Comprar arduíno uno', 'Aprender a fazer sinal de trânsito'],
      referencias: ['Nenhuma no momento'],
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Último projeto',
      subject: 'Último projeto da faculdade.',
      descricao: 'Fazer o TCC',
      valor: 100,
      acoes: ['Fazer uma pokedex', 'Estudar banca TCC', 'Combinar reuniões com colegas'],
      referencias: ['GOOGLE - API POKEDEX'],
      date: 'Yesterday',
      id: 4,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public setMessages(message: Message) {
    this.messages.push(message);
  }

  public adicionarId() {
    this.id++;
  }

  public receberId() {
    return this.id;
  }

  public retirarItemParaEdicao(id: number){
    this.messages.splice(id, 1);
    this.id--;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {

  lancamentos = [
    { nome: 'Michel', cidade: 'Nova Iguaçu', estado: 'Rio de janeiro',
    status: 'Ativo', valor: 4.55, pessoa: 'São Paulo'},
    { nome: 'Joao', cidade: 'Tijuca', estado: '10/06/2017',
    status: 'Ativo', valor: 80000, pessoa: 'Acre'},
    { nome: 'Pedro', cidade: 'Vila Isabel', estado: 'Bahia',
    status: 'Inativo', valor: 800, pessoa: 'Escola Abelha Rainha'},
    { nome: 'Maria', cidade: 'Maracanã', estado: '05/06/2017',
    status: 'Ativo', valor: 55000, pessoa: 'Roraima'},
    { nome: 'Joana', cidade: 'Copacabana', estado: 'Rio Grande do Sul',
    status: 'Inativo', valor: 1750, pessoa: 'Casa Nova Imovéis'},
    { nome: 'Chico', cidade: 'Mesquita', estado: 'Belo Horizonte',
    status: 'Inativo', valor: 180, pessoa: 'Academia top'},
    ];
    }



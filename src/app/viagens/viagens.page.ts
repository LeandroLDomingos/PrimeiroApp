import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  public viagens =[
    {local: 'Paris', data: '19/01/2003',descricao: 'Viagem longa e legal. Comi pão francês' ,imagem: 'data:image/jpeg;base64,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'},
    {local: 'Italia', data: '25/09/2019',descricao: 'Fui em um predio troto e não foi uma mal construção. Gostei da Pizza', imagem: 'https://partiuintercambio.org/wp-content/uploads/2019/05/bolsa-de-estudo-na-It%C3%A1lia.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  public amigos = [
    {nome: 'Amigo1',idade:'65',nivel: 2},
    {nome: 'Amigo2',idade:'32',nivel: 224},
    {nome: 'Amigo3',idade:'414',nivel: 4124},
    {nome: 'Amigo4',idade:'53255',nivel: 1421421},
    {nome: 'Amigo5',idade:'2',nivel: 4},
  ]

  constructor() { }

  ngOnInit() {
  }

}

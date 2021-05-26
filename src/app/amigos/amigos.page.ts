import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  public amigos = [
    {nome:'Amigo1',idade:'65',nivel: 2},
    {nome: 'Amigo2',idade:'32',nivel: 224},
    {nome: 'Amigo3',idade:'414',nivel: 4124},
    {nome: 'Amigo4',idade:'53255',nivel: 1421421},
    {nome: 'Amigo5',idade:'2',nivel: 4},
  ]
  
   constructor(public actionSheetController: ActionSheetController) { }
  async amigosAction({ nome }) {
    const actionSheet = await this.actionSheetController.create({
      header: 'nome',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('remover do array');
          console.log('friends',this.amigos);
          this.amigos.forEach((amg, i) => {
            if (amg.nome === nome) {
              console.log('i', i)
              this.amigos.splice(i, 1);
              return null;
            }
          });
        }
      }, {
        text: 'Editar',
        icon: 'pencil',
        handler: () => {
          console.log('');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  deletarAmigo(){

  }

  ngOnInit() {
  }
}

import { ModalclientePage } from './../modalcliente/modalcliente.page';
import { Cliente, ClienteService } from './../../servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
clientes: Cliente[];


  constructor(private service: ClienteService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.clientes = response;

    });
  }
  remover(id: any){
    this.service.remove(id).subscribe(() =>{
      this.service.getAll().subscribe(response =>{
        this.clientes = response;
      });

    });
  }

  novoCliente(){
    this.modalCtrl.create({
      component : ModalclientePage
    }).then(modal => {
      modal.present();
    return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response =>{
        this.clientes = response;
    });

    });

  }
  atualizar(c: Cliente){
    //console.log(c);
 this.modalCtrl.create({
  component: ModalclientePage,
  componentProps: {c}
 }).then (modal => {
  modal.present();
return modal.onDidDismiss();
}).then(({data}) =>{
  this.service.getAll().subscribe(response =>{
    this.clientes = response;
});

});
}
  }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
id: string;
nome: string;
cidade: string;
email: string;
cpf: string;
nasc: string;
senha: string;
interesse: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //local:
  private url = 'http://127.0.0.1/crudionic/api.php';
  //000web funcionando parcialmente
  //private url = 'https://pam21.000webhostapp.com/cliente';
  //infinity Bloqueado
  //private url = 'http://pam2.epizy.com/cliente';

  //AwardSpacepleno!
  //private url = 'http://pam2.atwebpages.com/cliente';


  constructor(private http: HttpClient) { }

  getAll(){

    return this.http.get<[Cliente]>(this.url);

  }

  remove(id: any){
    return this.http.delete(this.url + '/' + id);

  }
  create(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }
  update(cliente: Cliente, id: any){
    return this.http.put(this.url + '/' + id, cliente);
  }
}

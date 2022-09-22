import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject)=> {
    //   // console.log('Hola mundo');
    //   if(false){
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa
    //   .then((resp) => {
    //     console.log(resp);
    //     console.log('Termine');
    //   })
    //   .catch((err) => {
    //     console.log('Error en mi promesa', err);
    //   })

    // console.log('Fin del Init');

    this.getUsuarios()
      .then(usuarios => console.log(usuarios));
  }

  getUsuarios() {
    const url = 'https://reqres.in/api/users';
    
    return new Promise(resolve => {
      const usuarios = fetch(url);
      usuarios.then((resp) => {
        // console.log(await resp.json());
        // resp.json().then(body => console.log(body));
        return resp.json();
      })
      .then(body => {
        // console.log(body.data);
        resolve(body.data);
      });
    });
  }
}

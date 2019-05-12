import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Seller } from 'src/app/models/Seller.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  seller: Seller = new Seller();
  idloged: number;
  mostrar: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {

    if (this.seller.user === "" || this.seller.user === null || this.seller.user === undefined) {
      alert('CAMPOS VACIOS, los campos deben de estar llenos');
    } else {
      this.loginService.getSeller(this.seller.user, this.seller.password)
        .then(data => {
          if (data != null) {
            this.seller = data;
            console.log('seller--->', this.seller);
            sessionStorage.setItem("sellerD",this.seller.document);
            this.router.navigate(['welcome']);
          }
        }, error => {

          if (error.status === 404) {
            alert('usuario y/0 contraseña incorrectos')
          }
        });
    }
  }
  //habilitar los bonotes de busqueda y consumir el service (1 hora) -->
  //crear el form de artwork y consumir el servicio -->
  //unificar los dos componentes en uuno solo y poder hacer la animacion -->
  //crear componente de añadir artwork y conssumir ese service (2 horas) -->
  //verificar si existe la cedula con el que se esta creandp la obra -->
  //lograr vender pidiendo el doc del customer asosiado, en un modal (3 horas)
  //crear el componente de ventas y hacer las consultas que pide el enunciado (2 horas)
  //crear componente de segundo flujo con su menu  (2 hora)
  //crear componente de registro de clientes para segundo flujo (3 horas)
  //hacer redireccion de flujos (1 hora)
  //dejar el componente de admin salas, asignacion de seller y registro de clientes en el segundo flujo (1 hora)
  //pruebas unitarias(indefinido)
}

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
            this.router.navigate(['welcome']);
          }
        }, error => {

          if (error.status === 404) {
            alert('usuario y/0 contraseña incorrectos')
          }
        });
    }
  }
}

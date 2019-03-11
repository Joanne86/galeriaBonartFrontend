import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Sesion } from 'src/app/models/sesion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sesion : Sesion = new Sesion();
  username: string;
  password_: string;
  idloged: number;
  mostrar: boolean = false;
  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){

    this.loginService.getSesion(this.username, this.password_)
    .then(data => {
      if(data!=null){        
        this.sesion = data;
        this.idloged=this.sesion.id;
        this.loginService.setIdloged(this.idloged);
        this.router.navigate(['welcome']);
      }else{
        alert('usuario y/0 contraseña incorrectos')
      }     
    });
  }
  mostrarRegistro(): boolean{
    console.log('entra aqui');
    return this.mostrar;
  }
  cambiar(): boolean{
    if(this.mostrar){
      this.mostrar=false;
    }else{
      this.mostrar=true;
    }
    
    return this.mostrar;
  }
}

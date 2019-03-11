import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.getsesionloged()!=null){
      this.loginService.getsesionloged().then(data=>{
        this.user.sesion=data;
      })
    } 
  }
  createUser(): void {
    if(this.loginService.getsesionloged()==null){
      alert('tiene que loguearse primero');
    }else{
      this.userService.createUser(this.user)
      .then(data => {
        alert('contact created!');
      });
    }
    
  }
}

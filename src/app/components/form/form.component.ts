import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.getsellerloged()!=null){
      this.loginService.getsellerloged().then(data=>{
       // this.user.sesion=data;
      })
    } 
  }
/*
  user: User = new User();

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.getsellerloged()!=null){
      this.loginService.getsellerloged().then(data=>{
        this.user.sesion=data;
      })
    } 
  }
  createUser(): void {
    if(this.loginService.getsellerloged()==null){
      alert('tiene que loguearse primero');
    }else{
      this.userService.createUser(this.user)
      .then(data => {
        alert('contact created!');
      });
    }
    
  }
  */
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Artist } from 'src/app/models/Artist.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist : Artist;
  nombre: string;
  idloged: number;

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.idloged=this.loginService.idloged;
    if(this.idloged!=0){
      this.userService.readUsersId(this.idloged)
      .then(data => {
      //  this.users = data;
      });
    }else{
      this.userService.getUsers()
      .then(data => {
       // this.users = data;
      });
    }    
  }
  /*deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .then(data => {
      //  this.users = this.users.filter(u => u !== user);
      });
  }
  editUser(user: User): void{
    this.userService.deleteUser(user)
    .then(data =>{
      
    })
  }
  readUser(user: User): void{
    this.userService.readUser(user)
      .then(data => {
       // this.users = [];
       // this.users.push(data);
      });
  }
*/
}

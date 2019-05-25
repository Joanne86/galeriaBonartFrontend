import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { LoginService } from 'src/app/services/login.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class ArtistComponent implements OnInit {

  artist : Customer = new Customer();
  artists: Customer[];

  constructor(private customerService: RepositoryService, private loginService: LoginService) { }

  ngOnInit() {
    //this.idloged=this.loginService.idloged;
      this.customerService.findAll(`customer-api`)
      .then(data => {
        this.artists = data;
      });
      
    /* if(this.idloged!=0){
     // this.artistService.readUsersId(this.idloged)
      .then(data => {
        this.artists = data;
      });
    }else{
      this.userService.getUsers()
      .then(data => {
       // this.users = data;
      });
    }    */
  }

  deleteArtist(): void {
   console.log("borra");
  }
  updateArtist(): void {
    console.log("edita");
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

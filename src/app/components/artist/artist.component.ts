import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';
import { LoginService } from 'src/app/services/login.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist : Artist = new Artist();
  artists: Artist[];

  constructor(private artistService: RepositoryService, private loginService: LoginService) { }

  ngOnInit() {
    //this.idloged=this.loginService.idloged;
      this.artistService.findAll(`artist-api`)
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

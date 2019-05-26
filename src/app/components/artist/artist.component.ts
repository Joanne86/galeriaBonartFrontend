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

  artist: Artist = new Artist();
  artists: Artist[];
  errorFindAll: boolean;

  constructor(private artistService: RepositoryService, private loginService: LoginService) { }

  ngOnInit() {
    this.artistService.findAll(`artist-api`)
      .then(data => {
        this.artists = data;
        this.errorFindAll = false;
      }, error => {
        this.errorFindAll = true;
      });
  }
  findByDocument(document){
    this.artistService.findByDocument_(`artist-api`, document).then(response => {
      if(response===null){
        alert('El Artista no se encuentra');
      }else{
        this.artists = [];
        this.artists.push(response);
      }    
    });
  }
}

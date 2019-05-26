import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.css']
})
export class FormArtistComponent implements OnInit {
artist: Artist = new Artist(); 
artists: Artist[];
errorFindAll: boolean;
show: boolean;

  constructor(private artistService: RepositoryService) { 
    
  }

  ngOnInit() {
    this.show = false;
    this.findAll();
  }

  findAll(){
    this.artistService.findAll(`artist-api`)
    .then(data => {
      this.artists = data;
      this.errorFindAll = false;
    }, error => {
      this.errorFindAll = true;
    });
  }

  createArtist(artist: Artist){
    
  }
  mostrarComponente(){
    if (this.show === false) {
      console.log('muetsra componente');
      this.show = true;
    } else {
      console.log('oculta componente');
      this.show = false;
    }
  }
  deleteArtist(artist){

  }

}

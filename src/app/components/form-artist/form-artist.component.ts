import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.css']
})
export class FormArtistComponent implements OnInit {
  artist1: Artist = new Artist();
  artist: Artist = new Artist();
  artists: Artist[];
  errorFindAll: boolean;
  show: boolean;
  document;

  constructor(private artistService: RepositoryService) {

  }

  ngOnInit() {
    this.show = false;
    this.findAll();
  }

  findByDocument(){
    this.artistService.findByDocument_(`artist-api`, this.document).then(response => {
      if(response===null){
        alert('El Artista no se encuentra');
      }else{
        this.artists = [];
        this.artists.push(response);
      }    
    });
  }

  findAll() {
    this.artistService.findAll(`artist-api`)
      .then(data => {
        this.artists = data;
        this.errorFindAll = false;
      }, error => {
        this.errorFindAll = true;
      });
  }

  createArtist(artist1: Artist) {

    if (artist1.document === undefined || artist1.name === undefined || artist1.cellphone === undefined ||
      artist1.city === undefined || artist1.exhibitions === undefined || artist1.address === undefined) {
      alert('DEBE LLENAR TODOS LOS CAMPOS');
    } else {
      this.artistService.findByDocument(`artist-api`, artist1.document).then(response =>{
        if(response){
          alert('YA EXISTE UN ARTISTA CON ESTA CÉDULA');
        }else{
          this.artistService.create(`artist-api`, artist1).then(response => {
            alert('Artista registrado con EXITO'); 
            this.findAll();
           // this.artist1.document=undefined;
          }, error => {
            alert('ERROR al registrar artista');
          });
        }
      });     
    }
  }

  mostrarComponente() {
    if (this.show === false) {
      console.log('muetsra componente');
      this.show = true;
    } else {
      console.log('oculta componente');
      this.show = false;
    }
  }
  deleteArtist(artist) {
    this.artistService.deleteArtist(`artist-api`, artist).then(response => {
      this.artists = this.artists.filter(response => response !== artist);
    }, error => {
      alert('TIENE OBRAS ASOCIADAS');
    });
  }

}

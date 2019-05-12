import { Component, OnInit, Output } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';
import { RepositoryService } from 'src/app/services/repository.service';
import { Artwork } from 'src/app/models/Artwork.model';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  artworks: Artwork[];
  artwork: Artwork = new Artwork();

  constructor(private artworkService: RepositoryService) { }
  show: boolean;
  ngOnInit() {
    this.show = false;
    this.findAll();

  }
  findAll() {
    this.artworkService.findByRoomCode(sessionStorage.getItem("codeRoom"))
      .then(data => {
        this.artworks = data;
      });
  }
  sellArtwork(artwork) {

  }
  price(artwork) {
    console.log('precio: ', artwork.price);
    if (artwork.price === 0) {
      return false;
    } else {
      return true;
    }
  }
  findArtwork(name: string) {
    this.artworkService.findByArtworkName(name)
      .then(data => {
        console.log('data: ', data);
        if (data === null) {
          alert("LA OBRA NO SE ENCUENTRA");
        } else {
          this.artworks = [];
          this.artworks.push(data);
        }

      });
  }
  createArtwork(artwork) {
    console.log(artwork.artist.document);
    if (artwork.artist.document === undefined || artwork.price === undefined || artwork.name === undefined) {
      alert("LLENE TODOS LOS CAMPOS");

    } else {
      this.artworkService.findByDocument(artwork.artist.document).then(response =>{
        if(response){
          artwork.room.code = sessionStorage.getItem("codeRoom");
          this.artworkService.create("artwork-api", artwork).then(data => {
            alert("LA OBRA GUARDADA");
            this.findAll();
          });
        }else{
          alert("NO HAY UN ARTISTA REGISTRADO CON ESE DOCUMENTO, PRIMERO DEBE REGISTRARLO");
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
  deleteArtwork(artwork){
    console.log('artwork--->',artwork );
   this.artworkService.delete("artwork-api", artwork)
      .then(data => {
        this.artworks = this.artworks.filter(data => data !== artwork);
      });
  }
}

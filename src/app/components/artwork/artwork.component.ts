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
  artwork : Artwork = new Artwork();

  constructor(private artworkService: RepositoryService) { }
  @Output() show: boolean;

  ngOnInit() {
    this.artworkService.findByRoomCode(sessionStorage.getItem("codeRoom"))
      .then(data => {
        this.artworks = data;
      });
      this.show=false;
  }
  sellArtwork(artwork){

  }
  price(price): boolean{
    if(price!==0&&price!==null){
      return true;
    }
  }
  findArtwork(name: string){
    this.artworkService.findByArtworkName(name)
    .then(data => {
      console.log('data: ', data);
      if(data===null){
        alert("LA OBRA NO SE ENCUENTRA");
      }else{
        this.artworks = [];
        this.artworks.push(data);
      }
     
    });
  }
  mostrarComponente(){
    
    if(this.show===false){
      console.log('muetsra componente');
        this.show=true;
    }else{
      console.log('oculta componente');
        this.show=false;
    }
}

}

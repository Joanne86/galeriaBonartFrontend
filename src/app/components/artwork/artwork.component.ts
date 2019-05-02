import { Component, OnInit } from '@angular/core';
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


  ngOnInit() {
    this.artworkService.findByRoomCode(sessionStorage.getItem("codeRoom"))
      .then(data => {
        this.artworks = data;
      });

  }
  sellArtwork(artwork){

  }
  price(price): boolean{
    if(price!==0){
      return true;
    }
  }

}

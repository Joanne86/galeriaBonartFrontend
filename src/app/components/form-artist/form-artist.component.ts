import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist.model';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.css']
})
export class FormArtistComponent implements OnInit {
artist: Artist = new Artist(); 
  constructor() { }

  ngOnInit() {
  }
  createArtist(artist: Artist){
    
  }

}

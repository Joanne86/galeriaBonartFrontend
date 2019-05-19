import { Component, OnInit } from '@angular/core';
import { ArtworkSaled } from 'src/app/models/ArtworkSaled.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  artworksSaled: ArtworkSaled[];
  artworkSaled: ArtworkSaled = new ArtworkSaled();
  total;
  constructor(private artworkSaledService: RepositoryService) { }

  ngOnInit() {
    this.artworkSaledService.getTotal(sessionStorage.getItem("codeRoom")).then(response =>{
      this.total=response;
    });
    this.findAll();

  }
  findAll() {
    this.artworkSaledService.findSalesByRoomCode(sessionStorage.getItem("codeRoom"))
      .then(data => {
        this.artworksSaled = data;
      });
  }
}

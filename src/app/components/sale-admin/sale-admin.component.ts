import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { ArtworkSaled } from 'src/app/models/ArtworkSaled.model';

@Component({
  selector: 'app-sale-admin',
  templateUrl: './sale-admin.component.html',
  styleUrls: ['./sale-admin.component.css']
})
export class SaleAdminComponent implements OnInit {
  artworksSaled: ArtworkSaled[];
  artworkSaled: ArtworkSaled = new ArtworkSaled();
  total;

  constructor(private saleService: RepositoryService) { }

  ngOnInit() {
    this.saleService.getTotals().then(response =>{
      this.total=response;
    });
    this.findAll();
  }
  findAll(){
    this.saleService.findAll("artworksaled-api").then(response =>{
      this.artworksSaled=response;
    }, error =>{
      alert('ERROR al consultar ventas');
    });
  }

}

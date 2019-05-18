import { Component, OnInit, Output } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Artwork } from 'src/app/models/Artwork.model';
import { Sale } from 'src/app/models/Sale.model';
import { Customer } from 'src/app/models/Customer.model';
import { ArtworkSaled } from 'src/app/models/ArtworkSaled.model';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  artworks: Artwork[];
  artwork: Artwork = new Artwork();
  artworkSaled : ArtworkSaled = new ArtworkSaled();
  sale: Sale;
  customer : Customer;

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
    this.sale = new Sale();
    this.customer = new Customer();
    let document;
    document = prompt("DOCUMENTO DEL CLIENTE: ");
    //validar si existe doc del cliente
    if(document!==""){
      this.customer.document =document;
      this.sale.artwork=artwork;
      this.sale.customer=this.customer;
      this.artworkService.create("sale-api", this.sale).then(response =>{
        alert("OBRA VENDIDA");
        this.saveArtworkSaled(artwork);
      }, error =>{
        alert("ERROR AL VENDER LA OBRA");
      });
      //this.deleteArtwork(artwork);
    }else{
      alert("NO PUEDE ESTAR VACIO EL CAMPO");
    }
    

  }

  saveArtworkSaled(artwork: Artwork){
    //se arma la obra vendida

    this.artworkSaled.inscription_code=artwork.inscription_code;
    this.artworkSaled.name=artwork.name;
    this.artworkSaled.number_room=artwork.room.code;
    this.artworkSaled.price=artwork.price;
    this.artworkSaled.artist=artwork.artist.name;
    //se guarda la obra vendida en la lista de obras
    this.artworkService.create("artworksaled-api", artwork).then(Response =>{
      console.log('se guardo la obra en obras vendidas');
    });


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

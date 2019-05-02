import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Room } from 'src/app/models/Room.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  room: Room = new Room();

  constructor(private roomService: RepositoryService) { }

  ngOnInit() {
    this.roomService.getCode(sessionStorage.getItem("sellerD")).then(data => {
      this.room = data;
      console.log('room code: ',this.room.code);
      console.log('room : ',this.room);
      sessionStorage.setItem("codeRoom", this.room.code.toString());
    });
  }

}

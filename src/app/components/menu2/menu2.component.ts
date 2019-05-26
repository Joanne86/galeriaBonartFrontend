import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  name;
  constructor(private roomService: RepositoryService) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('sellerName');
  }
}

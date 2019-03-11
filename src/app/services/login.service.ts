
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import * as proxy from '../../../proxy.config.json';

import { User } from '../models/user.model';
import { RequestService } from '../services/request.service';
import { Sesion } from '../models/sesion.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginService {

  sesion: any;
  idloged: number;

  constructor(private req: RequestService) {
    this.idloged=0;
   }

  public getSesion(username: string, password: string) {
    this.sesion=this.req.get(`/getSesion`, { queryParams: { username, password } });
    return this.sesion;
  }

  setIdloged(id: number){
    this.idloged= id;
  }
  getsesionloged(){
    return this.sesion;
  }

}

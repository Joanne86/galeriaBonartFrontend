import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import * as proxy from '../../../proxy.config.json';

import { RequestService } from '../services/request.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private req: RequestService) { }
//poner la url correcta por cada service
  public getUsers() {
    return this.req.get(`/findAll`);
  }

  public deleteUser(user) {
    return this.req.delete(`/deleteById/`, { queryParams: { id: user.id } });
  }

  public readUser(user) {
    return this.req.get(`/findById/`, { queryParams: { id: user.id } });
  }
  public readUsersId(idsesion: number) {
    return this.req.get(`/findAllByIdsesion/`, { queryParams: { idsesion } });
  }

  public createUser(user) {
    return this.req.post(`/create`, { data: user });
  }

  public updateUser(user) {
    return this.req.put(`/update`, { data: user });
  }
}

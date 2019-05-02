import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import * as proxy from '../../../proxy.config.json';

import { RequestService } from './request.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepositoryService {

  constructor(private req: RequestService) { }
//poner la url correcta por cada service
  public findAll(endpoint) {
    return this.req.get(`/`+endpoint+`/findAll`);
  }

  public findByRoomCode(code) {
    return this.req.get(`/artwork-api/findByRoomCode/`, { queryParams: { code: code } });
  }
  public getCode(document){
    return this.req.get(`/room-api/getCode/`, { queryParams: { document } });
 
  }

  public delete(endpoint, artist) {
    return this.req.delete(`/deleteById/`, { queryParams: { id: artist.document } });
  }

  public findById(endpoint,user) {
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

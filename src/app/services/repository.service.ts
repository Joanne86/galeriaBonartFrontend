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
  public findByArtworkName(name) {
    return this.req.get(`/artwork-api/findByName/`, { queryParams: { name: name } });
  }
  public getCode(document){
    return this.req.get(`/room-api/getCode/`, { queryParams: { document } });
 
  }

  public findByDocument(document){
    return this.req.get(`/artist-api/findByDocument/`, { queryParams: { document } });
  }

  public delete(endpoint, artwork) {
    return this.req.delete(`/`+endpoint+`/delete/`, { queryParams: {inscription_code: artwork.inscription_code} });
  }

  public findById(endpoint,user) {
    return this.req.get(`/findById/`, { queryParams: { id: user.id } });
  }
  public readUsersId(idsesion: number) {
    return this.req.get(`/findAllByIdsesion/`, { queryParams: { idsesion } });
  }

  public create(endpoint, entity) {
    return this.req.post(`/`+endpoint+`/create/`, { data: entity });
  }

  public updateUser(user) {
    return this.req.put(`/update`, { data: user });
  }
}

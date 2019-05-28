import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/Artist.model';

fdescribe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;
  let artistService: RepositoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent ],
      imports: [FormsModule],
      providers: [RepositoryService, HttpClient, HttpHandler, LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    artistService = TestBed.get(RepositoryService);
    fixture.detectChanges();
  });

   function spyArtistService(){
     
     var artists = [
       {
        document: "",
        name: "",
        cellphone: "",
        address: "",
        city: "",
        exhibitions: ""
       },
       {
        document: "",
        name: "",
        cellphone: "",
        address: "",
        city: "",
        exhibitions: ""
       }
     ]
    
    component.findAll();
    spyOn(artistService, 'findAll').and.returnValue(Promise.resolve(artists));
    artistService.findAll(`artist-api`).then(result =>{
      expect(component.artists).toBe(undefined);
    })
   
  }
  it('should create artist test ', () => {
    expect(component).toBeTruthy();
  });
  it('should findAll test ', () => {
    spyArtistService();  
  });

});

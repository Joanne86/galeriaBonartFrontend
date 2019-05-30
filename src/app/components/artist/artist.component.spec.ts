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

   function spyFindAll(){
     
    const promisedData = require('../../../assets/artist.json');
    
    component.findAll();
    spyOn(artistService, 'findAll').and.returnValue(Promise.resolve(promisedData));
    artistService.findAll(`artist-api`).then(result =>{
        expect(result).toEqual(promisedData); 
    });
   
  }
  function spyFindByDocument(){
    const promisedData = require('../../../assets/artist.json');
    
    component.findByDocument("123456789");
    spyOn(artistService, 'findByDocument_').and.returnValue(Promise.resolve(promisedData));
    artistService.findByDocument_(`artist-api`, "123456789").then(result =>{
        expect(result).toEqual(promisedData); 
    });
  }
  function spyFindByDocumentFail(){
    const promisedData = null;
    
    component.findByDocument("123456789");
    spyOn(artistService, 'findByDocument_').and.returnValue(Promise.resolve(null));
    artistService.findByDocument_(`artist-api`, "123456789").then(result =>{
        expect(result).toEqual(promisedData); 
        
    });
  }
  it('should create artist test ', () => {
    expect(component).toBeTruthy();
  });
  it('should findAll test ', () => {
    spyFindAll();  
  });
  it('should findByDocument test ', () => {
    spyFindByDocument();  
  });
  it('should findByDocument fail test ', () => {
    spyFindByDocumentFail();  
  });
  
});

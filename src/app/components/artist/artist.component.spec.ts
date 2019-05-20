import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

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
    fixture.detectChanges();
  });

  it('should create artist test ', () => {
    expect(component).toBeTruthy();
  });
});

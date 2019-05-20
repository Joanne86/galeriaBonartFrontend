import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkComponent } from './artwork.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

describe('ArtworkComponent', () => {
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkComponent ],
      imports: [FormsModule],
      providers: [RepositoryService, HttpClient, HttpHandler, LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

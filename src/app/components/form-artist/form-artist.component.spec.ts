import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtistComponent } from './form-artist.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('FormArtistComponent', () => {
  let component: FormArtistComponent;
  let fixture: ComponentFixture<FormArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArtistComponent ],
      imports: [FormsModule],
      providers: [RepositoryService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from 'src/app/services/repository.service';

fdescribe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent ],
      imports: [FormsModule],
      providers: [RepositoryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

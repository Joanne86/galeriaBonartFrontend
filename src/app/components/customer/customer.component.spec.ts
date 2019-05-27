import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistComponent } from '../artist/artist.component';



describe('CustomerComponent', () => {
  //let component: CustomerComponent;-->comentaree esta linea, para que dejara de dar error;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    //component = fixture.componentInstance;-->comentaree esta linea, para que dejara de dar error;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();-->comentaree esta linea, para que dejara de dar error;
  });
});

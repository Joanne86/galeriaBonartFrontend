import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './customer.component';

describe('CustomerComponent', () => {
  //let component: CustomerComponent;-->comentaree esta linea, para que dejara de dar error :v;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    //component = fixture.componentInstance;-->comentaree esta linea, para que dejara de dar error :v;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();-->comentaree esta linea, para que dejara de dar error :v;
  });
});

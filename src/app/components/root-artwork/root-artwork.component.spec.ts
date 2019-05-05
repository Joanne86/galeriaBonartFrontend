import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootArtworkComponent } from './root-artwork.component';

describe('RootArtworkComponent', () => {
  let component: RootArtworkComponent;
  let fixture: ComponentFixture<RootArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

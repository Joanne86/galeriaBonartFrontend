import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdminComponent } from './sale-admin.component';

describe('SaleAdminComponent', () => {
  let component: SaleAdminComponent;
  let fixture: ComponentFixture<SaleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

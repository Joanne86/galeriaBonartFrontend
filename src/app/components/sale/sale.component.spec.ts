import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleComponent } from './sale.component';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RepositoryService } from 'src/app/services/repository.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SaleComponent', () => {
  let component: SaleComponent;
  let fixture: ComponentFixture<SaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [RepositoryService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

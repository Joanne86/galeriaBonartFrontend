import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { LoginService } from 'src/app/services/login.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customers: Customer[];
  show: boolean;

  constructor(private customerService: RepositoryService, private loginService: LoginService) { }

  ngOnInit() {
    this.show = false;
    this.findAll();
  }
  findAll() {
    this.customerService.findAll(`customer-api`)
      .then(data => {
        this.customers = data;
      });
  }
  mostrarComponente() {

    if (this.show === false) {
      console.log('muetsra componente');
      this.show = true;
    } else {
      console.log('oculta componente');
      this.show = false;
    }
  }
  createCustomer(customer) {

  }
}

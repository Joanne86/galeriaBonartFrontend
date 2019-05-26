import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { LoginService } from 'src/app/services/login.service';
import { RepositoryService } from 'src/app/services/repository.service';
import { TypeCustomer } from 'src/app/models/TypeCustomer.model';

let TYPE_CUSTOMER = {
  ADULTO: 1,
  MENOR: 2
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customers: Customer[];
  typeCustomer: TypeCustomer = new TypeCustomer();
  show: boolean;
  document;
  codetype;
  total;



  constructor(private customerService: RepositoryService, private loginService: LoginService) { }

  ngOnInit() {
    this.show = false;
    this.findAll();
    this.getTotal();  
  }
  getTotal(){
    this.customerService.getTotalT().then(response => {
      this.total=response;
    });
  }
  findAll() {
    this.customerService.findAll(`customer-api`)
      .then(data => {
        this.customers = data;
      });
  }

  findByDocument() {
    this.customerService.findByDocument_(`customer-api`, this.document).then(response => {
      if (response === null) {
        alert('El Cliente no se encuentra');
      } else {
        this.customers = [];
        this.customers.push(response);
      }
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
  createCustomer(customer: Customer) {
    this.customerService.findByDocument(`customer-api`, customer.document).then(response => {
      if (response) {
        alert('ESTE CLIENTE YA INGRESO A LA OBRA');
      } else {
        console.log(this.codetype);
        this.typeCustomer.codetype = TYPE_CUSTOMER[this.codetype];
        customer.flag = 1;
        customer.typeCustomer = this.typeCustomer;

        this.customerService.create(`customer-api`, customer).then(response => {
          alert('Cliente registrado con EXITO');
          this.findAll();
          this.getTotal();
        }, error => {
          alert('ERROR al registrar cliente');
        });
      }
    });
  }
}

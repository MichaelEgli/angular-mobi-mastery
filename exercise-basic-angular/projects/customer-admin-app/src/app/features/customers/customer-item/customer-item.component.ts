import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../model/customers';

@Component({
  selector: 'my-org-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit', this.customer);
  }

  sayHello(customer: Customer) {
    console.log('sayHello from', customer.name + ' ' + customer.surname);
  }

  purchaseItem(customer: Customer) {
    console.log('purchase');
  }

}

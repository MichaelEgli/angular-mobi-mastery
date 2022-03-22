import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../model/customers';
import { Purchase } from '../model/purchase';

@Component({
  selector: 'my-org-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;
  @Output() purchase = new EventEmitter<Purchase>();

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit', this.customer);
  }

  sayHello(customer: Customer) {
    console.log('sayHello from', customer.name + ' ' + customer.surname);
  }

  purchaseItem(customer: Customer) {
    console.log('purchase');
    this.purchase.emit({customerId: customer.id, order: Math.ceil(Math.random() * 1000)});
  }

}

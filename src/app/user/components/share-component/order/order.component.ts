import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/user/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: any;
  isLoading: boolean = false;

  constructor(private _order: OrderService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this._order.getOrders().subscribe(data => {
      this.orders = data;

      this.isLoading = false;
    })
  }

}

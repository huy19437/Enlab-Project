import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

    @Input() orderId!: number;
    order!: Order;

    orderObj!: Order;

    constructor(private orderService: OrdersService) { }

    ngOnInit(): void {
        this.orderService.orderObj$.subscribe(x => this.orderObj = x);
    }

    getOrderDetail() {
    }
}

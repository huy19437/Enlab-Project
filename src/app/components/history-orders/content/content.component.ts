import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    @Input() orders!: Order[];

    orderId!: number;

    constructor(private orderService: OrdersService) { }

    ngOnInit(): void {
    }

    getOrder(orderId: number) {
        this.orderId = orderId;
        this.orderService.getOrderDetailObject(orderId);
    }
}

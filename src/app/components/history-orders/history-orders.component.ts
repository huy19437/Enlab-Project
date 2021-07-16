import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-history-orders',
    templateUrl: './history-orders.component.html',
    styleUrls: ['./history-orders.component.scss']
})
export class HistoryOrdersComponent implements OnInit {

    orders: Order[] = this.localStorage.getValue('orders') || [];


    constructor(private localStorage: LocalStorageService) { }

    ngOnInit(): void {

    }

}

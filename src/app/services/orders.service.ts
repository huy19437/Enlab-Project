import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private orders: Order[] = [];

    constructor(private localStorage: LocalStorageService) { }


    createOrder() {

    }


}

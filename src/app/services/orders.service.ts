import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Order } from '../models/order.model';
import { CartService } from './cart.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private orders: Order[] = this.localStorage.getValue('orders') || [];

    constructor(private localStorage: LocalStorageService, private cartService: CartService, private router: Router) { }


    createOrder(carts: Cart[], info: any) {
        const promiseObject = new Promise((resolve, reject) => {
            let order = {
                id: Math.random(),
                nameUser: info.nameUser,
                phoneUser: info.phoneUser,
                addressUser: info.addressUser,
                total: this.cartService.getCartTotal(),
                shippingFee: 12
            }
            this.orders.push(order);
            this.updateToLocalStorage('orders', this.orders);
            this.localStorage.remove('carts');
            resolve(true);
        })
        promiseObject
            .then((res) => {
                if (res) {
                    this.router.navigate(['/']);
                }
            })

    }

    updateToLocalStorage(storateKey: string, value: any) {
        this.localStorage.setObject(storateKey, value);
    }


}

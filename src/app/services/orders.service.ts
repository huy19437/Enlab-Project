import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Order } from '../models/order.model';
import { CartService } from './cart.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private orders: Order[] = this.localStorage.getValue('orders') || [];

    private ordersDetails!: Order;

    private displayOrderSubject: BehaviorSubject<Order> = new BehaviorSubject<Order>(<any>{});

    orderObj$: Observable<Order> = this.displayOrderSubject.asObservable();

    constructor(private localStorage: LocalStorageService, private cartService: CartService, private router: Router) { }


    createOrder(carts: Cart[], info: any) {
        console.log('info:', info);
        let totalCart = this.cartService.getCartTotal();

        const promiseObject = new Promise((resolve, reject) => {
            let order = {
                id: Math.random(),
                nameUser: info.nameUser,
                phoneUser: info.phoneUser,
                addressUser: info.addressUser,
                total: totalCart,
                shippingFee: 12,
                productsList: <Cart[]>this.localStorage.getValue('carts')
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

    getOrder(orderId: number): Order {
        let index = this.orders.findIndex(item => item.id === orderId);
        return this.orders[index];
    }

    getOrderDetailObject(orderId: number) {
        this.displayOrderSubject.next(this.getOrder(orderId));
    }




}

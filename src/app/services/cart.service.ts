import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Flower } from '../models/flower.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Flower[] = [];
    private carts: Cart[] = this.localStorage.getValue('carts') || [];

    private displayCartsSubject: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>(this.localStorage.getValue('carts') || []);

    carts$: Observable<Cart[]> = this.displayCartsSubject.asObservable();

    constructor(private localStorage: LocalStorageService) { }



    addToCart(product: Flower) {
        if (!this.checkIfProductExists(product, this.carts)) {
            let cartObj = {
                id: Math.random(),
                productId: product.id,
                productName: product.name,
                productImg: product.image,
                quantity: 1,
                subtotal: product.price,
            };
            this.carts.push(cartObj);
            this.updateToLocalStorage('carts', this.carts);
            this.updateCartsData();
        }
    }

    removeCartItem(cartItem: Cart) {
        const index = this.carts.findIndex(t => t.id === cartItem.id);
        this.carts.splice(index, 1);
        this.updateToLocalStorage('carts', this.carts);
        this.updateCartsData();
    }

    getCartTotal() {
        return this.carts.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.subtotal;
        }, 0)

    }

    getItems() {
        let tmp2: Cart[] = this.localStorage.getValue<Cart[]>('carts');
        return tmp2;
    }

    clearCart() {
        this.localStorage.remove('carts');
        this.carts = [];
        this.updateCartsData();
    }

    checkIfProductExists(product: Flower, carts: Cart[]) {
        const index = carts.findIndex(t => t.productId === product.id);

        if (index !== -1) {
            const cartObj = this.carts[index];
            cartObj.quantity = cartObj.quantity + 1;
            this.carts.splice(index, 1, cartObj);
            this.updateToLocalStorage('carts', this.carts);
            return true;
        }
        return false;
    }

    updateToLocalStorage(storateKey: string, value: any) {
        this.localStorage.setObject(storateKey, value);
    }

    updateCartsData() {
        this.displayCartsSubject.next(this.carts);
    }
}

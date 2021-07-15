import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Flower } from 'src/app/models/flower.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    items$!: Observable<Cart[]>;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.getCart();
        this.items$ = this.cartService.carts$;
    }

    clearCart() {
        this.cartService.clearCart();
    }

    removeCartItem(cartItem: Cart) {
        this.cartService.removeCartItem(cartItem);
    }

    getCartTotal(): number {
        return this.cartService.getCartTotal();
    }

}

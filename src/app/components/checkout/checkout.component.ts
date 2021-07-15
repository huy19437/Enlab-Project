import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Cart } from 'src/app/models/cart.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    @ViewChild('checkoutForm')
    checkoutForm!: NgForm;
    @ViewChild('nameUser')
    nameUser!: NgModel;
    @ViewChild('phoneUser')
    phoneUser!: NgModel;
    @ViewChild('addressUser')
    addressUser!: NgModel;



    carts: Cart[] = this.localStorage.getValue('carts');
    constructor(private orderService: OrdersService, private localStorage: LocalStorageService) { }

    ngOnInit(): void {
    }

    submitOrder() {
        if (!this.checkoutForm.valid) {
            alert('Invalid User data')
        } else {
            this.orderService.createOrder(this.localStorage.getValue('carts'), this.checkoutForm.value);
        }
    }

    getCartTotal(): number {
        return this.carts.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.subtotal;
        }, 0)

    }

}

import { Component, OnInit } from '@angular/core';
import { Flower } from 'src/app/models/flower.model';
import { CartService } from 'src/app/services/cart.service';
import { FlowersService } from 'src/app/services/flowers.service';

@Component({
    selector: 'app-flowers-list',
    templateUrl: './flowers-list.component.html',
    styleUrls: ['./flowers-list.component.scss']
})
export class FlowersListComponent implements OnInit {

    flowers: Flower[] = [];

    constructor(private floserService: FlowersService, private cartService: CartService) { }

    ngOnInit(): void {
        this.flowers = this.floserService.flowers;
    }

    addToCart(product: Flower): void {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }

}

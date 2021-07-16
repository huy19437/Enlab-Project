import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Flower } from 'src/app/models/flower.model';
import { Order } from 'src/app/models/order.model';
import { FlowersService } from 'src/app/services/flowers.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() content!: string;

    flowers!: Flower[];
    orders!: Order[];

    lists!: any[];
    keys!: Array<string>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private flowerService: FlowersService,
        private orderService: OrdersService,
        private localStorage: LocalStorageService
    ) { }

    ngOnInit(): void {
        if (this.route.snapshot.paramMap.get('id') === 'orders') {
            this.lists = this.localStorage.getValue('orders');
        }
        else if (this.route.snapshot.paramMap.get('id') === 'flowers') {
            this.lists = this.flowerService.flowers;
        }
        this.getKeyOfObjectArray(this.lists);
    }

    getKeyOfObjectArray(objArr: any[]) {

        objArr.forEach(element => {

            this.keys = Object.keys(element);
        });
    }


    convertOtA(obj: any) {
        return Object.values(obj);
    }

    checkIfImg(value: any): boolean {
        if (typeof value === 'string') {

            return value.includes('img');
        }
        return false;

    }
}

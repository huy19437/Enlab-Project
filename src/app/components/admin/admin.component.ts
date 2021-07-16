import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    content: string = "text content";

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
    }

    showTable() {
        this.router.navigate(['table-flower', 'flowers'], { relativeTo: this.route });
    }
    showTable2() {
        let data = {
            relativeTo: this.route,
            typeTable: 'order-list'
        };
        this.router.navigate(['table-order-list', 'orders'], { relativeTo: this.route });
    }

}

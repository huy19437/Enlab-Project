import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    isLoggedIn = false;
    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.isLoggined$.subscribe(isLogin => this.isLoggedIn = isLogin);
    }

    logout() {
        this.authService.logout();
    }

}

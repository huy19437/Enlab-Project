import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;

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
        this.changeColorNavbar();
    }

    logout() {
        this.authService.logout();
    }

    changeColorNavbar() {

        $(document).ready(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > 500) {
                    $(".navbar").css("background", "#ec4969");
                }

                else {
                    $(".navbar").css("background", "transparent");
                }
            })
        })
    }

}

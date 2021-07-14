import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @ViewChild('loginForm')
    loginForm!: NgForm;
    @ViewChild('username')
    username!: NgModel;

    @ViewChild('password')
    password!: NgModel;


    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            alert('Invalid Login data')
        } else {
            this.authService.login(this.loginForm.value);
        }
    }

}

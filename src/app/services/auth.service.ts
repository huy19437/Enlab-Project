import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TypeUser, User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private users: User[] = [];

    private user: User[] = [
        { id: 1, type: TypeUser.Admin, name: 'admin', password: '12345678' },
        { id: 2, type: TypeUser.Customer, name: 'user', password: '12345678' },
    ];

    isLoggined$: Observable<boolean> = this.isLogin.asObservable();

    constructor(private localStorage: LocalStorageService, private router: Router) { }

    isAuthenticated() {
        if (this.localStorage.getValue('token')) {
            this.updateAuthStatus(true);
        }
    }

    setTokenAfterLogin() {
        this.localStorage.setObject('token', { islogin: true });
    }

    setLocalAuthData() {
        this.localStorage.setObject('user', this.user);
    }

    login(formValue: any) {
        let userObj = this.checkValidUser(formValue);
        if (userObj) {
            console.log(userObj);
            if (userObj.type === 0) {
                this.router.navigate(['/admin'])
            }
            if (userObj.type === 1) {
                this.router.navigate(['/'])
            }
            this.updateAuthStatus(true);
            this.setTokenAfterLogin();
        }
    }

    checkValidUser(formValue: any): any {
        this.users = this.localStorage.getValue<User[]>('user') || [];
        let userObj = this.users.find(t => t.name.includes(formValue.username))

        if (userObj) {
            if (formValue.password.includes(userObj.password)) { return userObj }
        } else { return null; }
    }

    updateAuthStatus(status: boolean) {
        this.isLogin.next(status);
    }

    logout() {
        this.updateAuthStatus(false);
        this.localStorage.remove('token');
    }

}

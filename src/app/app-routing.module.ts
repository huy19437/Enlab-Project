import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HistoryOrdersComponent } from './components/history-orders/history-orders.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuardService } from './services/auth-guard';

const routes: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
    { path: 'history-orders', component: HistoryOrdersComponent, canActivate: [AuthGuardService] },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

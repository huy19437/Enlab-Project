import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { FlowersListComponent } from './components/home/flowers-list/flowers-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HistoryOrdersComponent } from './components/history-orders/history-orders.component';
import { ContentComponent } from './components/history-orders/content/content.component';
import { OrderDetailsComponent } from './components/history-orders/content/order-details/order-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/admin/table/table.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NotfoundComponent,
        LoginComponent,
        AdminComponent,
        FlowersListComponent,
        CartComponent,
        CheckoutComponent,
        HistoryOrdersComponent,
        ContentComponent,
        OrderDetailsComponent,
        FooterComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

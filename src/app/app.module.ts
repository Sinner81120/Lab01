import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from '../app/Lab01/product/product.component';
import { Bai1Component } from '../app/Lab01/bai1/bai1.component';
import { Bai2Component } from '../app/Lab01/bai2/bai2.component';
import { Bai3Component } from '../app/Lab01/bai3/bai3.component';
import { Bai5Component } from '../app/Lab01/bai5/bai5.component';
import { DetailComponent } from '../app/Lab01/detail/detail.component';
import { SinhvienComponent } from '../app/Lab02/sinhvien/sinhvien.component';
import { DetailsinhvienComponent } from '../app/Lab02/detailsinhvien/detailsinhvien.component';
import { ControllComponent } from './controll/controll.component';
import { CartComponent } from '../app/Lab01/cart/cart.component';
import { GiaodienComponent } from './Lab03/giaodien/giaodien.component';
import { Lab04Component } from './Lab04/lab04/lab04.component';
import { Lab05Component } from './Lab05/lab05/lab05.component';
import { Lab051Component } from './Lab05/lab051/lab051.component';
import { Lao052Component } from './Lab05/lao052/lao052.component';
import { Lab053Component } from './Lab05/lab053/lab053.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Bai5Component,
    DetailComponent,
    SinhvienComponent,
    DetailsinhvienComponent,
    ControllComponent,
    CartComponent,
    GiaodienComponent,
    Lab04Component,
    Lab05Component,
    Lab051Component,
    Lao052Component,
    Lab053Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    RouterModule.forRoot([
      { path: 'lab05-3', component: Lao052Component },
      { path: 'lab05-4', component: Lab053Component },
      { path: 'cart', component: CartComponent },
      { path: 'lab05-1', component: Lab05Component },
      { path: 'lab05-2', component: Lab051Component },
      { path: 'lab04', component: Lab04Component },
      { path: 'giaodien', component: GiaodienComponent },
      { path: 'home', component: ControllComponent },
      { path: 'bai1', component: Bai1Component },
      { path: 'bai2', component: Bai2Component },
      { path: 'bai3', component: Bai3Component },
      { path: 'bai5', component: Bai5Component },
      { path: 'product', component: ProductComponent },
      { path: 'detail/:productId', component: DetailComponent },
      { path: 'sinhvien', component: SinhvienComponent },
      { path: 'detailsinhvien/:lastName', component: DetailsinhvienComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

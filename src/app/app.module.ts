import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai5Component } from './bai5/bai5.component';
import { DetailComponent } from './detail/detail.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { DetailsinhvienComponent } from './detailsinhvien/detailsinhvien.component';
import { ControllComponent } from './controll/controll.component';
import { CartComponent } from './cart/cart.component';

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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'cart',component: CartComponent},
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

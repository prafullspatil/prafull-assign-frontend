import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackNavbarComponent } from './component/static/black-navbar/black-navbar.component';
import { WhiteNavbarComponent } from './component/static/white-navbar/white-navbar.component';
import { CheckoutComponent } from './component/dynamic/checkout/checkout.component';

import { ProductInfoComponent } from './component/dynamic/product-info/product-info.component';
import { ProductImageComponent } from './component/dynamic/product-image/product-image.component';
import { SuccessComponent } from './common/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackNavbarComponent,
    WhiteNavbarComponent,
    CheckoutComponent,
    ProductInfoComponent,
    ProductImageComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

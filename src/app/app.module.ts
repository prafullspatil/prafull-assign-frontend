import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackNavbarComponent } from './component/static/black-navbar/black-navbar.component';
import { WhiteNavbarComponent } from './component/static/white-navbar/white-navbar.component';
import { CheckoutComponent } from './component/dynamic/checkout/checkout.component';
import { NgxHttpLoaderModule } from 'ngx-http-loader';
import { ProductInfoComponent } from './component/dynamic/product-info/product-info.component';
import { ProductImageComponent } from './component/dynamic/product-image/product-image.component';
import { SuccessComponent } from './common/success/success.component';
import { CancelComponent } from './common/cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackNavbarComponent,
    WhiteNavbarComponent,
    CheckoutComponent,
    ProductInfoComponent,
    ProductImageComponent,
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxHttpLoaderModule.forRoot(),
  ],
  providers: [HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }

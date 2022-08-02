import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { ProductService } from 'src/app/shared/service/product.service';
import { StripService } from 'src/app/shared/service/strip.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  price = 999;
  productData: any = [];
  private stripKey = 'pk_test_51LPs9aSJIMUNrwun2OWJ0g0KSPwSmjWH4kj3RLNAki5OPRGwLCQdFJ5JNuwOdJP7J3lFtd5T1cO70JBewAldHetW00W6cE3ZAU';
  stripePromise = loadStripe(this.stripKey);
  constructor(private product: ProductService, private strip: StripService) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    return this.product.getProductById().subscribe((res) => {
      this.productData = res;
      console.log(this.productData);
    })
  }

  async pay(qty:any) {
    // console.log(data);
    const payment = {
      name: this.productData.name,
      currency: 'inr',
      // image: this.productData.images.url1,
      amount: this.productData.price * 100,
      quantity: qty,
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    }

    const stripe: any = await this.stripePromise;

    this.strip.stripCheckout(payment).subscribe((res) => {
      // using stripe to redirect To Checkout page of Stripe platform
      stripe.redirectToCheckout({
        sessionId: res.id,
      });
    });

  }

}

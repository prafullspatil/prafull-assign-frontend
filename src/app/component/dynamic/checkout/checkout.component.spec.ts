import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { ProductService } from "src/app/shared/service/product.service";
import { CheckoutComponent } from "./checkout.component";

fdescribe('CheckoutComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        declarations: [
          AppComponent,
          CheckoutComponent
        ],
        providers:[
          {provide: ProductService, useClass: ProductService}
        ]
      }).compileComponents();
    });
  
    it('should have as strip key is equal to "Stripe Key"', () => {
      const fixture = TestBed.createComponent(CheckoutComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.stripKey).toEqual('pk_test_51LPs9aSJIMUNrwun2OWJ0g0KSPwSmjWH4kj3RLNAki5OPRGwLCQdFJ5JNuwOdJP7J3lFtd5T1cO70JBewAldHetW00W6cE3ZAU');
    });

    // it('should call the pay method',async( () => {
    //   const fixture = TestBed.createComponent(CheckoutComponent);
    //   fixture.detectChanges();
    //   const app = fixture.debugElement.componentInstance;
    //   spyOn(app, 'pay');
    //   let HTMLel: HTMLElement;
    //   HTMLel = fixture.debugElement.query(By.css('button')).nativeElement;
    //   HTMLel.click();
    //   expect(app.pay).toHaveBeenCalledTimes(1);
    // }));
  });
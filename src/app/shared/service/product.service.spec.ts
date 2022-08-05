import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

fdescribe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
       
      ],
      providers:[
        {provide: ProductService, useClass: ProductService}
      ]
    }).compileComponents();
  });
   
  });

  xit('should be created', () => {
    let service: ProductService;
    service = TestBed.inject(ProductService);
    expect(service).toBeTruthy();
  });


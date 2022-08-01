import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackNavbarComponent } from './black-navbar.component';

describe('BlackNavbarComponent', () => {
  let component: BlackNavbarComponent;
  let fixture: ComponentFixture<BlackNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

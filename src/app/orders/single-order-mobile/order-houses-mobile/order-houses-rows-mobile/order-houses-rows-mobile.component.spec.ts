import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHousesRowsMobileComponent } from './order-houses-rows-mobile.component';

describe('OrderHousesRowsMobileComponent', () => {
  let component: OrderHousesRowsMobileComponent;
  let fixture: ComponentFixture<OrderHousesRowsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHousesRowsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHousesRowsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPaymentComponent } from './flight-payment.component';

describe('FlightPaymentComponent', () => {
  let component: FlightPaymentComponent;
  let fixture: ComponentFixture<FlightPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightPaymentComponent]
    });
    fixture = TestBed.createComponent(FlightPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

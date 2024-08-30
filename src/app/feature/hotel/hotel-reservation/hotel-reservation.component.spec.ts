import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationComponent } from './hotel-reservation.component';

describe('HotelReservationComponent', () => {
  let component: HotelReservationComponent;
  let fixture: ComponentFixture<HotelReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelReservationComponent]
    });
    fixture = TestBed.createComponent(HotelReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

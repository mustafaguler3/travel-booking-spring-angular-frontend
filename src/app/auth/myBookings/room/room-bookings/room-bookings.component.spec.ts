import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingsComponent } from './room-bookings.component';

describe('RoomBookingsComponent', () => {
  let component: RoomBookingsComponent;
  let fixture: ComponentFixture<RoomBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomBookingsComponent]
    });
    fixture = TestBed.createComponent(RoomBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedHotelsComponent } from './recomended-hotels.component';

describe('RecomendedHotelsComponent', () => {
  let component: RecomendedHotelsComponent;
  let fixture: ComponentFixture<RecomendedHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendedHotelsComponent]
    });
    fixture = TestBed.createComponent(RecomendedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

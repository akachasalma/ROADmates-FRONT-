import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDetailsLayoutComponent } from './ride-details-layout.component';

describe('RideDetailsLayoutComponent', () => {
  let component: RideDetailsLayoutComponent;
  let fixture: ComponentFixture<RideDetailsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideDetailsLayoutComponent]
    });
    fixture = TestBed.createComponent(RideDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRideLayoutComponent } from './create-ride-layout.component';

describe('CreateRideLayoutComponent', () => {
  let component: CreateRideLayoutComponent;
  let fixture: ComponentFixture<CreateRideLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRideLayoutComponent]
    });
    fixture = TestBed.createComponent(CreateRideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksLayoutComponent } from './feedbacks-layout.component';

describe('FeedbacksLayoutComponent', () => {
  let component: FeedbacksLayoutComponent;
  let fixture: ComponentFixture<FeedbacksLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksLayoutComponent]
    });
    fixture = TestBed.createComponent(FeedbacksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

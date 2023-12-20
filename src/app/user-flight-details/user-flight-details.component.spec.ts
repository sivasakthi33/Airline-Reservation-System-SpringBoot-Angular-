import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFlightDetailsComponent } from './user-flight-details.component';

describe('UserFlightDetailsComponent', () => {
  let component: UserFlightDetailsComponent;
  let fixture: ComponentFixture<UserFlightDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFlightDetailsComponent]
    });
    fixture = TestBed.createComponent(UserFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

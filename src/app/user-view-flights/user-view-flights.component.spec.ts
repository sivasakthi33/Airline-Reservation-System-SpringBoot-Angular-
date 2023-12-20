import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFlightsComponent } from './user-view-flights.component';

describe('UserViewFlightsComponent', () => {
  let component: UserViewFlightsComponent;
  let fixture: ComponentFixture<UserViewFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewFlightsComponent]
    });
    fixture = TestBed.createComponent(UserViewFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

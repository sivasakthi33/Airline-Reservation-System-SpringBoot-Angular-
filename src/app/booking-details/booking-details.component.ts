import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Booking } from "../model/booking.component";
import { BookingService } from "../services/booking.service";
import { ScheduledFlightService } from "../services/scheduled-flight.service";
import { ScheduledFlight } from "../model/scheduled-flight";
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent  {

  booking: Booking = new Booking();
  errorMessage: string='';
  submitted = false;
  show: boolean = false;
  scheduleFlight: any;
  scheduleFlightId: number | undefined;

  constructor(
    private bookingService: BookingService,
    private router: Router,
    // private service: ScheduledFlightService
  ) {}

  ngOnInit(): void {}
  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
    // this.scheduleFlight = new ScheduledFlight();
  }
  // searchScheduleFlight(scheduleFlightId: number): any {
  //   this.show = true;
  //   console.log(scheduleFlightId);
  //   this.service
  //     .searchScheduledFlight(scheduleFlightId)
  //     .subscribe(
  //       (scheduleFlight: any) => (this.scheduleFlight = scheduleFlight)
  //     );
  // }
  idValid: boolean = false;
  validateId() {
    // if (this.scheduleFlightId > 999) {
    //   this.idValid = true;
    // } else if (this.scheduleFlightId < 1) {
    //   this.idValid = true;
    // } else {
    //   this.idValid = false;
    // }
  }
  save() {
    this.bookingService.createBooking(this.booking)
    .subscribe(data => this.gotoList(),
      error => console.log(error));
    this.booking = new Booking();
  }
  onSubmit() {
    this.submitted = false;
    this.save();
    alert("data saved");
    // this.router.navigate(["/booking-list"]);
  }
  gotoList() {
    this.router.navigate(["/booking-confirmed"]);
  }
  
}

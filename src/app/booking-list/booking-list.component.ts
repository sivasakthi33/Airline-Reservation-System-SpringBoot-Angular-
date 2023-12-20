import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

   
   
    bookings: Booking[] = [];

    constructor(private router: Router,private bookingService: BookingService,) { }
  
    ngOnInit(): void {
      this.reloadData();
     
    }


  reloadData() {
    // this.bookings = this.bookingService.getBookingsList();
    this.bookingService.getBookingsList().subscribe((res: any) => {
      this.bookings = res;
    });
  }


  bookingDetails(bookingId: number) {
    this.router.navigate(['bookingDetails', bookingId]);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';

@Component({
  selector: 'app-user-flight-details',
  templateUrl: './user-flight-details.component.html',
  styleUrls: ['./user-flight-details.component.css']
})
export class UserFlightDetailsComponent implements OnInit {

  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  scheduleFlights: ScheduledFlight[] = [];

  constructor(private router: Router, private service: ScheduledFlightService) { }

  ngOnInit(): void {
    this.service.showScheduleFlights().subscribe((data: any) => {
      this.scheduleFlights=data;
    }
      //(data:Observable<ScheduledFlight[]>)=>this.scheduleFlights=data
    );
  }

  removeScheduleFlight(scheduleFlightId:number){
    this.service.removeScheduleFlight(scheduleFlightId).subscribe();
    alert("Deleted");
    location.reload();
}

}

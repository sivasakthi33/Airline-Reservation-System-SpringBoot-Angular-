import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-view-flights',
  templateUrl: './user-view-flights.component.html',
  styleUrls: ['./user-view-flights.component.css']
})


@Component({
  selector: 'app-user-view-flights',
  templateUrl: './user-view-flights.component.html',
  styleUrls: ['./user-view-flights.component.css']
})
export class UserViewFlightsComponent  implements OnInit {

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


  view(){
    this.router.navigate(['/flight-details']);
  
  }

}

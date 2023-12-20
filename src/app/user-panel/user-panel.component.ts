import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private router: Router,
    private authenti: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenti.logOut();
    this.router.navigate(['/home']);
  }
  addBooking(): void {
    this.router.navigate(['/addBooking']);
  }
  flightsDetails(): void{
    this.router.navigate(['/addBooking'])
  }
  userFlightDetails(): void{
    this.router.navigate(['/userFlightDetails']);
  }
}

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  totalPrice:string='';
  bookingId: number = 0;
  nameOnCard:string='';
  cardNumber:string='';
  expYear:string='';
  cvv:string='';
  PaidDate:string='';
  paidAmount:string='';
  tot:number=0;

  constructor(private router:Router ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  payment(){
    this.router.navigate(['/booking-confirmed'])
  }
  
}


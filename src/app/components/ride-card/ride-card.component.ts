import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ride } from 'src/app/services/ride-service.service';
import {  DemandRequest, DemandServiceService } from 'src/app/services/demand-service.service';
import { BookingConfirmationComponent } from '../booking-confirmation/booking-confirmation.component';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.css'],
})
export class RideCardComponent {
  @Input() ride!: Ride;
  requestedSeats: number = 1; // Default seats requested

  constructor(public dialog: MatDialog, private demandService: DemandServiceService) {}

  bookRide(rideId: number) {
    const dialogRef = this.dialog.open(BookingConfirmationComponent, {
      data: {
        ride: this.ride,
        requestedSeats: this.requestedSeats,
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.requestedSeats) {
        this.requestedSeats = result.requestedSeats;
  
        // Replace with the actual user ID
        const userId = '674c1a72e6ca493d274f0daa';
  
        this.demandService.createDemand(userId, rideId, this.requestedSeats).subscribe({
          next: (response) => {
            alert('Booking successful!');
            this.ride.availableSeats -= this.requestedSeats; // Update available seats locally
          },
          error: (err) => {
            alert(err.error.message || 'Error while booking the ride.');
          },
        });
      }
    });
  }
  
}

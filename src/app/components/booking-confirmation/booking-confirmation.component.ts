import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css'],
})
export class BookingConfirmationComponent {
  requestedSeats: number;
  errorMessage: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ride: any; requestedSeats: number },
    private dialogRef: MatDialogRef<BookingConfirmationComponent>
  ) {
    this.requestedSeats = data.requestedSeats;
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  confirmBooking(): void {
    if (this.requestedSeats > this.data.ride.availableSeats) {
      this.errorMessage = 'Requested seats exceed available seats.';
      return;
    }

    this.dialogRef.close({ requestedSeats: this.requestedSeats });
  }
}

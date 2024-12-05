import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-details-layout',
  templateUrl: './ride-details-layout.component.html',
  styleUrls: ['./ride-details-layout.component.css']
})
export class RideDetailsLayoutComponent {
  userFeedbacks = [
    {
      rating: 5.0,
      comment: 'Outstanding experience! Friendly driver and smooth journey.',
      date: new Date('2023-10-09T09:00'),
    },
    {
      rating: 4.5,
      comment: 'Very good service, but the car could be cleaner.',
      date: new Date('2023-11-01T14:30'),
    },]
}

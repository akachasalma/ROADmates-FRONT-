import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  @Input() demand: any; // Data for the request
  requestStatus: string = 'Waiting for Response'; // Initial status

  // Methods to update the status
  acceptRequest(id: any) {
    this.requestStatus = 'Accepted';
  }

  rejectRequest(id: any) {
    this.requestStatus = 'Rejected';
  }
}

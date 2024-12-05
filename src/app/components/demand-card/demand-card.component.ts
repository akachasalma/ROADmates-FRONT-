import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demand-card',
  templateUrl: './demand-card.component.html',
  styleUrls: ['./demand-card.component.css']
})
export class DemandCardComponent {
  @Input() demand: any;

  selectedAction: string | null = null;

  acceptRequest(id: any) {
    this.selectedAction = 'accept';
    console.log(`Accepted request with ID: ${id}`);
    // Perform additional logic here
  }

  rejectRequest(id: any) {
    this.selectedAction = 'reject';
    console.log(`Rejected request with ID: ${id}`);
    // Perform additional logic here
  }

  holdRequest(id: any) {
    this.selectedAction = 'hold';
    console.log(`Held request with ID: ${id}`);
    // Perform additional logic here
  }
}

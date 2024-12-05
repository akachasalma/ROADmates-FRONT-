import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RideServiceService, Ride } from 'src/app/services/ride-service.service';

@Component({
  selector: 'app-create-ride-layout',
  templateUrl: './create-ride-layout.component.html',
  styleUrls: ['./create-ride-layout.component.css']
})
export class CreateRideLayoutComponent implements OnInit{
  searchQuery = '';
  searchForm: FormGroup;
  passengers = 1; // Default passenger coun
  rides: Ride[] = [];


  filteredRides = [...this.rides]; // Initializes with all rides


  constructor(private fb: FormBuilder,  private rideService: RideServiceService) {
    this.searchForm = this.fb.group({
      departure: [''],
      destination: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
    this.fetchRides();
  }

  fetchRides() {
    this.rideService.getRides().subscribe({
      next: (rides) => {
        console.log('Fetched rides (after transformation):', rides); // Log rides
        this.rides = rides;
        this.filteredRides = rides; // Initialize with all rides
      },
      error: (err) => {
        console.error('Error fetching rides:', err);
      },
    });
  }
  

  switchLocations() {
    const currentDeparture = this.searchForm.get('departure')?.value;
    const currentDestination = this.searchForm.get('destination')?.value;
    this.searchForm.patchValue({
      departure: currentDestination,
      destination: currentDeparture,
    });
  }

  incrementPassengers() {
    if (this.passengers < 5) {
      this.passengers++;
    }
  }

  decrementPassengers() {
    if (this.passengers > 1) {
      this.passengers--;
    }
  }

  onSearch() {
    const { departure, destination, date } = this.searchForm.value;
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : null;

    this.filteredRides = this.rides.filter((ride) => {
      return (
        (!departure || ride.departure.toLowerCase().includes(departure.toLowerCase())) &&
        (!destination || ride.destination.toLowerCase().includes(destination.toLowerCase())) &&
        (!formattedDate || ride.date === formattedDate)
      );
    });
  }
}

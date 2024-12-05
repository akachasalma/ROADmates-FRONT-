import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ride, RideServiceService } from 'src/app/services/ride-service.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit{



  user = {
    name: 'Ayman DHKAR',
    email: 'aymane@example.com',
    phone: '+123 456 789',
    memberSince: new Date('2022-01-01'),
  };

  createdRides = [
   
    {
      id: 1,
      departure: 'Tunis',
      destination: 'Nabeul',
      time: '18:00',
      date: '2023-12-01',
      availableSeats: 2,
      pricePerSeat: '15.59',
      author: 'Ayman DHKAR',
      authorPhoto: 'assets/images/profile.png',
      rating: '5.0',
    }
  ];

  receivedDemands = [
    {
      id: 1,
      driverName: 'Ala messaoud',
      pickup: '789 Pine Rd',
      dropoff: '321 Maple St',
      date: new Date('2023-11-16T09:00'),
    }
  ];

  sentRequests = [
    {
      id: 1,
      driverName: 'Michael Brown',
      pickup: '102 Birch Ln',
      dropoff: '654 Cedar Ct',
      date: new Date('2023-11-17T07:45'),
      status: 'Waiting for Response', // Initial status
    
    }
  ];
  

  userFeedbacks = [
    {
      rating: 5.0,
      comment: 'Outstanding experience! Friendly driver and smooth journey.',
      date: new Date('2023-10-09T09:00'),
    },
   
  ];
  filteredRides: Ride[] = []; // Define and initialize filteredRides


  ngOnInit(): void {
    this.fetchRides();
  }
  showCreateRideForm = false;
  createRideForm: FormGroup;

  constructor(private fb: FormBuilder, private rideService: RideServiceService) {
    // Initialize the form with controls and validators
    this.createRideForm = this.fb.group({
      startingPoint: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required], // Now handled as a string
      availableSeats: ['', [Validators.required, Validators.min(1)]],
      pricePerSeat: ['', [Validators.required, Validators.min(0)]],
      carModel: ['', Validators.required],
      smokingAllowed: [false],
      musicOn: [false],
      airConditioning: [false],
    });
  }

  toggleCreateRideForm() {
    this.showCreateRideForm = !this.showCreateRideForm;
  }

  onSubmitRide() {
    if (this.createRideForm.valid) {
      const newRide = {
        userId: '674c1a72e6ca493d274f0daa', // Replace with the actual user ID (e.g., from authentication)
        dep_location: this.createRideForm.value.startingPoint,
        arr_location: this.createRideForm.value.destination,
        time: `${this.createRideForm.value.date}T${this.createRideForm.value.time}`,
        price: this.createRideForm.value.pricePerSeat,
        availableSeats: this.createRideForm.value.availableSeats,
        matriculationNumber: 'ABC-123', // Replace with real data if needed
        brand: this.createRideForm.value.carModel,
        color: 'Black', // Replace with real data if needed
      };

      this.rideService.createRide(newRide).subscribe({
        next: (response) => {
          console.log('Ride created successfully with ID:', response);
          this.toggleCreateRideForm();
          this.createRideForm.reset();
        },
        error: (err) => {
          console.error('Error creating ride:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
  fetchRides(): void {
    this.rideService.getRides().subscribe({
      next: (rides) => {
        console.log('Fetched rides:', rides); // Debug fetched rides
        this.filteredRides = rides; // Assign fetched rides to filteredRides
      },
      error: (err) => {
        console.error('Error fetching rides:', err);
      },
    });
  }
}

import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { UserServiceService } from './user-service.service'; // Ensure this matches the actual path



export interface Ride {
  id: number;
  userId: "674c1a72e6ca493d274f0daa"; // Ensure this is defined and required
  departure: string; // Mapped from dep_location
  destination: string; // Mapped from arr_location
  time: string;
  date: string; // Add this field if required by your UI
  availableSeats: number;
  pricePerSeat: string; // Mapped from price
  author: string; // Full name of the user
  authorPhoto: string; // Optional if you have user profile photos
  rating: string; // Optional for ride rating
}


@Injectable({
  providedIn: 'root'
})
export class RideServiceService {
  private baseUrl = 'http://localhost:8222/api/v1/offers'; 

  constructor(private http: HttpClient,  private userService: UserServiceService) {}


  getRides(): Observable<Ride[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      mergeMap((rides) =>
        forkJoin(
          rides.map((ride) =>
            this.userService.getUserById(ride.userId).pipe(
              map((user) => {
                let formattedDate = 'Invalid Date';
                let formattedTime = 'Invalid Time';
  
                try {
                  // Remove the invalid `T` and split the `time` field
                  const timeParts = ride.time.split('T');
                  const datePart = timeParts[0].trim(); // Valid date portion
                  const timePart = timeParts[1]?.trim(); // Time portion
  
                  // Parse the date part into a valid Date object
                  const parsedDate = new Date(datePart);
  
                  if (!isNaN(parsedDate.getTime())) {
                    formattedDate = parsedDate.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
                    formattedTime = timePart || '00:00'; // Default to "00:00" if time part is missing
                  } else {
                    console.error(`Invalid parsed date for ride ${ride.id}:`, ride.time);
                  }
                } catch (err) {
                  console.error(`Error parsing time for ride ${ride.id}:`, ride.time, err);
                }
  
                return {
                  id: ride.id,
                  userId: ride.userId,
                  departure: ride.dep_location,
                  destination: ride.arr_location,
                  time: formattedTime,
                  date: formattedDate,
                  pricePerSeat: ride.price.toFixed(2),
                  availableSeats: ride.availableSeats,
                  author: `${user.firstname} ${user.lastname}`,
                  authorPhoto: 'assets/images/default-profile.png',
                  rating: '4.5',
                };
              })
            )
          )
        )
      )
    );
  }
  
  
  
  

  // Method to create a new ride
  createRide(ride: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, ride);
  }


}

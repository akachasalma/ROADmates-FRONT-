import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserRequest } from '../models/userRequest';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})



export class UserServiceService {

  private baseUrl = 'http://localhost:8222/api/v1/users'; // Base URL for the API

  constructor(private http: HttpClient) {}

  // Method to sign up a user
  signUp(user: UserRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user, { responseType: 'text' });
  }

  private userCache = new Map<string, UserRequest>();

  getUserById(userId: string): Observable<UserRequest> {
    if (this.userCache.has(userId)) {
      return of(this.userCache.get(userId)!); // Return cached user
    } else {
      return this.http.get<UserRequest>(`${this.baseUrl}/details/${userId}`).pipe(
        tap((user) => this.userCache.set(userId, user)) // Cache the user
      );
    }
  }
  



}

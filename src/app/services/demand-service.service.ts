import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DemandRequest {
  userId: string; // User ID of the requester
  offerId: number; // ID of the offer
  seatsRequested: number; // Number of seats requested
}

export interface DemandResponse {
  id: number;
  userId: string;
  offerId: number;
  seatsRequested: number;
  status: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemandServiceService {
  private baseUrl = 'http://localhost:8222/api/v1/demand';

  constructor(private http: HttpClient) {}

  createDemand(userId: string, offerId: number, seatsRequested: number): Observable<DemandResponse> {
    const demandRequest: DemandRequest = { userId, offerId, seatsRequested };
    return this.http.post<DemandResponse>(this.baseUrl, demandRequest);
  }
}

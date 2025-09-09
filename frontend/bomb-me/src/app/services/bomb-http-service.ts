import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegistrationRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BombHttpService {

  private baseUrl = 'http://127.0.0.1:5000'; // replace with your real endpoint

  constructor(private http: HttpClient) {}

 // Registration
postRegistration(): Observable<RegistrationResponse> {
  return this.http.post<RegistrationResponse>(`${this.baseUrl}/create-user`, {});
}
  
  
}

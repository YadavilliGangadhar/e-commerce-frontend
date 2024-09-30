import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = 'http://localhost:8080/api/profile'; // Backend profile API URL

  constructor(private http: HttpClient) {}

  // Method to fetch user profile data
  getUserProfile(id: string): Observable<any> {
    const token = localStorage.getItem('token'); // Get the stored JWT token
    const headers = { 'Authorization': `Bearer ${token}` };

    return this.http.get<any>(`${this.profileUrl}/${id}`, { headers });
  }
}

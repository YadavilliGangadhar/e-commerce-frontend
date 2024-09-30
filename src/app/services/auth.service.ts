import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private apiUrl = 'http://localhost:8080/api/auth'; // Your API URL

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials).subscribe(
      (response: any) => {
        const token = response.token; // Assume the token is in response.token
        const roles = response.roles;  // This is now available
        const username = response.username;
        const userId = response.userid; // Assuming your response contains userId

        console.log(username);
        // Save token to local storage or session storage
        localStorage.setItem('token', token);
        localStorage.setItem('role', roles[0]); // Store role from backend
        localStorage.setItem('username',username);
        localStorage.setItem('userId', userId); // Store userId from backend
        this.isLoggedInSubject.next(true);
        console.log('JWT Token:', token); // Log the token to the console
        console.log(roles[0]);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  // New method to get the user role
  getRole(): string | null {
    const role = localStorage.getItem('role'); // Retrieve the role from local storage
    console.log("Retrieved role from local storage:", role); // Log the retrieved role
    return role; // Return the role directly as a string
}

getCurrentUserId(): string | null {
  return localStorage.getItem('userId'); // Retrieve userId
}

getUsername(): string | null {
  return localStorage.getItem('username');
}


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']); // Navigate to login after logout
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

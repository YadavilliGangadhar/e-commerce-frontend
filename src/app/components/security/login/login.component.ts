import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  login() {
    const isLoggedIn = this.authService.login({ username: this.username, password: this.password });
    if (isLoggedIn) {
      console.log("Login successful, navigating to home"); // Check if this is printed
      this.router.navigate(['/home']);
    } else {
      // Handle login failure (e.g., show an error message)
      console.error('Login failed');
    }
  }
}

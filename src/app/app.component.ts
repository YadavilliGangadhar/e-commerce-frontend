import { Component , OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-commerce-frontend';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    // Check if the user is logged in when the app starts
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.isLoggedInSubject.next(true); // Set the logged-in state
    }
  }

  onLogin() {
    this.isLoggedIn = true;
  }
}

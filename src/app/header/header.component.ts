import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$ = this.authService.isLoggedIn$; // Observable for login state
  currentRoute: string = '';
  isAdmin = false;

  constructor(private router: Router, private authService: AuthService) {
    // Subscribe to route changes
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  // Logout function
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}

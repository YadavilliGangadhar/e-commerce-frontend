import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {}; // Object to hold profile data

  constructor(private profileService: ProfileService, private authService:AuthService) {}

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId(); // Get the current user ID
    console.log("Current User ID:", userId); // Log the user ID for debugging

    if (userId) {
      this.profileService.getUserProfile(userId).subscribe(
        (data) => {
          this.profile = data;
        },
        (error) => {
          console.error('Error fetching user profile', error);
        }
      );
    } else {
      console.error('No user ID found');
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) {
    // Explicitly define the form controls
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: [[], Validators.required]
    });
  }

  // Explicitly type the form controls
  get f() { 
    return this.registerForm.controls as { 
      username: AbstractControl; 
      password: AbstractControl; 
      roles: AbstractControl; 
    }; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post('http://localhost:8080/api/auth/register', this.registerForm.value)
    .subscribe(
        (response: any) => {
            console.log('User registered successfully', response);
            // Handle success response here
        },
        error => {
            console.error('Error registering user, "User May Already Exists"');
            // Handle error response here
        }
    );
  }
  register() {
    // Navigate to the registration page or open a modal
    this.router.navigate(['/login']);
  }
}

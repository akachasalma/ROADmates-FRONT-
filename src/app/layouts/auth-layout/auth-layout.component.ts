import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {
  
  authForm: FormGroup;
  resetForm() {
    this.authForm.reset();
  }
  constructor(private fb: FormBuilder) {
    // Initialize form with empty values
    this.authForm = this.fb.group({
      email: [ "",[Validators.required, Validators.email]], // Empty email field
      password: [ "***",[Validators.required, Validators.minLength(6)]], // Empty password field
      rememberMe: [false] // Default value for checkbox
    });
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log(this.authForm.value); // Process the form data
    }
  }
}

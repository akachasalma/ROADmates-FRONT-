import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from 'src/app/models/userRequest';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css'],
})
export class ProfileLayoutComponent {
  profileForm: FormGroup;
  isLoading: boolean = false; // To indicate loading state
  submissionMessage: string | null = null; // To display success or error messages

  constructor(private fb: FormBuilder, private userService: UserServiceService) {
    // Initialize the FormGroup with nested address
    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      birthday: ['', Validators.required],
      identityCard: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      address: this.fb.group({
        street: ['', Validators.required],
        houseNumber: ['', Validators.required],
        zipcode: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const user: UserRequest = this.profileForm.value;
      this.isLoading = true; // Start loading
      this.submissionMessage = null; // Clear any previous messages

      this.userService.signUp(user).subscribe({
        next: (response) => {
          console.log('User created with ID:', response);
          this.submissionMessage = `User created successfully! User ID: ${response}`;
        },
        error: (err) => {
          console.error('Error creating user:', err);
          this.submissionMessage = 'Failed to create user. Please try again.';
        },
        complete: () => {
          this.isLoading = false;
        },
      });
      
      
  }}

  onUploadPicture() {
    alert('Upload Profile Picture clicked!');
  }
}

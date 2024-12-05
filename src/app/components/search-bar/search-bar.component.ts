import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchForm: FormGroup;
  passengers: number = 1;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      const formData = {
        departure: this.searchForm.value.departure,
        destination: this.searchForm.value.destination,
        date: this.searchForm.value.date,
        passengers: this.passengers,
      };
      console.log('Search submitted:', formData);
    } else {
      alert('Please fill in all fields!');
    }
  }

  switchLocations() {
    const departure = this.searchForm.get('departure')?.value;
    const destination = this.searchForm.get('destination')?.value;
    this.searchForm.patchValue({
      departure: destination,
      destination: departure,
    });
  }

  incrementPassengers() {
    this.passengers += 1;
  }

  decrementPassengers() {
    if (this.passengers > 1) {
      this.passengers -= 1;
    }
  }
}

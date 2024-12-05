import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbacks-layout',
  templateUrl: './feedbacks-layout.component.html',
  styleUrls: ['./feedbacks-layout.component.css']
})
export class FeedbacksLayoutComponent {
  selectedRating: number = 0; // Default rating
  comment: string = ''; // Default comment

  // Function to update the rating
  updateRating(rating: number) {
    this.selectedRating = rating;

    // Apply active class to the stars
    const labels = document.querySelectorAll('.rating label');
    labels.forEach((label, index) => {
      if (index < this.selectedRating) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  }

  // Function to submit the feedback
  submitFeedback() {
    const feedback = {
      rating: this.selectedRating,
      comment: this.comment
    };

    // Send this feedback to your backend (via HTTP)
    console.log('Submitting feedback:', feedback);

    // Example: Use HttpClient to send feedback
    // this.http.post('your-backend-url', feedback).subscribe(response => {
    //   console.log('Feedback submitted successfully:', response);
    // });
  }
}
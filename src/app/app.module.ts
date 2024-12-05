import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateRideLayoutComponent } from './layouts/create-ride-layout/create-ride-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RideCardComponent } from './components/ride-card/ride-card.component';
import { DemandCardComponent } from './components/demand-card/demand-card.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';
import { FeedbacksLayoutComponent } from './layouts/feedbacks-layout/feedbacks-layout.component';
import { RideDetailsLayoutComponent } from './layouts/ride-details-layout/ride-details-layout.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { RequestCardComponent } from './components/request-card/request-card.component';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    HeaderComponent,
    CreateRideLayoutComponent,
    ProfileLayoutComponent,
    SearchBarComponent,
    RideCardComponent,
    DemandCardComponent,
    UserLayoutComponent,
    FeedbackCardComponent,
    FeedbacksLayoutComponent,
    RideDetailsLayoutComponent,
    BookingConfirmationComponent,
    RequestCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule

    

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {
  public rentalId: number;
  public currentRental: Rental = new Rental("", "", 0, "", 0);
  public bookings: Array<Booking> = new Array<Booking>();

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController,
    private httpClient: HttpClient) {

      let arrow = (data: any) => {
        this.rentalId = data.params.rentalId;  
  
        console.log(this.rentalId);
        
        // this.currentRental = this.rentalService.findRentalById(this.rentalId);
        
        this.httpClient.get("http://localhost:3000/api/properties/propertyId/" + this.rentalId).subscribe(
          (response: any) => {
            console.log("Response from query:");
            console.log(response);
    
            // setting rentals array here equal to the array of properties
            // returned by the query
            this.currentRental = response.rental;
          }
        );

        this.httpClient.get("http://localhost:3000/api/bookings/" + this.rentalId).subscribe(
          (response: any) => {
            console.log("Response from query:");
            console.log(response);
    
            // setting rentals array here equal to the array of properties
            // returned by the query
            this.bookings = response.bookings;
          }
        );

        if (! this.currentRental) {
          alert("Rental not found!");
          this.navCtrl.navigateBack("main/tabs/tab1");
        }
      
      };
  
      this.activatedRoute.queryParamMap.subscribe(arrow);
    }

  ngOnInit() {
    
  }

  navToEditRentalPage(rental: Rental) {
    this.navCtrl.navigateForward("edit-rental", {
      queryParams: {
        rentalId: rental.id
      }
    });
  }
}

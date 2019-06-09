import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { RentalService } from '../services/rental.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public rentals: Array<Rental>;

  constructor(private navCtrl: NavController, private httpClient: HttpClient) {
    const ownerId = localStorage.getItem("owner_id");
    console.log("Owner ID:");
    console.log(ownerId);

    // there should be an ownerId because you can't get into the app without one
    this.httpClient.get("http://localhost:3000/api/properties/ownerId/" + ownerId).subscribe(
      (response: any) => {
        console.log("Response from query:");
        console.log(response);

        // setting rentals array here equal to the array of properties
        // returned by the query
        this.rentals = response.rentals;
      }
    );
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

  navToRentalDetails(rental: Rental) {
    this.navCtrl.navigateForward("rental-details", {
      queryParams: {
        rentalId: rental.id
      }
    });
  }

}

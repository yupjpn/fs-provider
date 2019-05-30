import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private rentals: Array<Rental>;

  constructor(private navCtrl: NavController, private rentalService: RentalService) {
    console.log(this.rentalService);
    this.rentals = this.rentalService.getRentals();
  }

  public setRentals(rentals: Array<Rental>) {
    this.rentals = rentals;
  }

  public getRentals() {
    return this.rentals;
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

  navToRentalDetails(rental: Rental) {
    this.navCtrl.navigateForward("rental-details", {
      queryParams: {
        rentalName: rental.getRentalName(),
        rentalId: rental.getId()
      }
    });
  }

}

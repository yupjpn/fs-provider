import { Component } from '@angular/core';
import { Rental } from '../models/rental.model';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private existingRentals: Array<Rental>;

  constructor(private navCtrl: NavController) {

    let rental1 = new Rental("Comfy Cottage in Singapore", "Singapore, Singapore", 99, "https://upload.wikimedia.org/wikipedia/commons/4/4f/Singapore_Cottage%2C_Collingwood.jpg");
    let rental2 = new Rental("Gigantic House Near Duke", "Durham, North Carolina", 60, "https://upload.wikimedia.org/wikipedia/commons/7/7a/JOHN_SPRUNT_HILL_HOUSE%2C_DURHAM_COUNTY.JPG");

    this.existingRentals = new Array<Rental>();
    this.existingRentals.push(rental1);
    this.existingRentals.push(rental2);
    console.log(this.existingRentals.length);
  }

  navToRental() {
    this.navCtrl.navigateForward("rental");
  }

}

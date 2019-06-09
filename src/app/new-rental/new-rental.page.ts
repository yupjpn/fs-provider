import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../models/rental.model';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage implements OnInit {

  public rental: Rental;

  constructor(private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
    ) {
      let ownerId = localStorage.getItem("owner_id");
      let numOwnerId = parseInt(ownerId);
      console.log("owner Id:");
      console.log(ownerId);
      this.rental = new Rental("", "", 0, "", numOwnerId);
     }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Could not make a new rental.",
    buttons: ['Dismiss']
    });
    await alert.present(); 
}

submit() {
  console.log("Submitting to the server...");
  console.log("Submit");
  console.log(this.rental);
  
    this.httpClient.post("http://localhost:3000/api/properties", this.rental).subscribe(
      (response: any) => {
        console.log(response);
        this.navBackExistingRentals();
      },
      (err) => {
        console.log(err);
        this.presentAlert();
      }
    );      
}

  ngOnInit() {
  }

  navBackExistingRentals() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}


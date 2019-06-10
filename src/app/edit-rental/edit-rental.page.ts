import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { Rental } from '../models/rental.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.page.html',
  styleUrls: ['./edit-rental.page.scss'],
})
export class EditRentalPage implements OnInit {

  public rentalId: number;
  private currentRental: Rental = new Rental("", "", 0, "", 0);

  constructor(private httpClient: HttpClient, private navCtrl: NavController,
    private alertCtrl: AlertController, private activatedRoute: ActivatedRoute) {
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

        if (! this.currentRental) {
          alert("Rental not found!");
          this.navCtrl.navigateBack("main/tabs/tab1");
        }
      
      };
  
      this.activatedRoute.queryParamMap.subscribe(arrow);


     }

  navToTabs() {
    this.navCtrl.navigateBack("main/tabs/tab1");
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Could not register. The email you entered may already be taken.",
    buttons: ['Dismiss']
    });
    await alert.present(); 
}

  update() {
    console.log("Submitting to the server...");
    // console.log(this.currentRental);
    
      this.httpClient.post("http://localhost:3000/api/properties/update", this.currentRental).subscribe(
        (response: any) => {
          console.log(response);
          this.navToTabs();
        },
        (err) => {
          console.log(err);
          this.presentAlert();
        }
      );      
  }

  ngOnInit() {
  }

}

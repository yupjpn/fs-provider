import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { Owner } from '../models/owner.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public owner: Owner;

  constructor(private httpClient: HttpClient, private navCtrl: NavController,
    private alertCtrl: AlertController) {
      this.owner = new Owner("", "", "", "");
    }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Could not register. The email you entered may already be taken.",
    buttons: ['Dismiss']
    });
    await alert.present(); 
}

  // this function only gets called once the four registration fields have been filled
  submit() {
    console.log("Submitting to the server...");
    console.log(this.owner);
    
      this.httpClient.post("http://localhost:3000/api/owners", this.owner).subscribe(
        (response: any) => {
          console.log(response);
          this.navToLogin();
        },
        (err) => {
          console.log(err);
          this.presentAlert();
        }
      );      
  }

  navToLogin() {
    this.navCtrl.navigateForward('login');
  }

  ngOnInit() {
  }

}

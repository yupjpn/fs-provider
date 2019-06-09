import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(private navCtrl: NavController, private alertCtrl: AlertController,
    private httpClient: HttpClient) {    
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Incorrect login information.",
    buttons: ['Dismiss']
   });
   await alert.present(); 
}

login() {

  const authReq = {
    email: this.email,
    password: this.password
  };

  this.httpClient.post("http://localhost:3000/api/owners/authentication", authReq).subscribe(
    (response: any) => {
      
      // response is an array at the moment, which is why it doesn't have a .id property
      const ownerId = response.owner.id;

      console.log(response);
      console.log(ownerId);

      localStorage.setItem("owner_id", ownerId);

      this.navToTabs();
    },
    (err) => {
      this.presentAlert();
    }
  );
}

  navToTabs() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

  navToRegistration() {
    this.navCtrl.navigateForward('registration');
  }

}

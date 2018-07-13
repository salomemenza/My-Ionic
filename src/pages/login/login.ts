import { Component } from '@angular/core';
import { NavController, NavParams, Platform, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: String;
  public password: String;

  constructor( public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'menu-principal');
  }

  submitLogin(){
    console.log(this.username);
    console.log(this.password);
  }

}

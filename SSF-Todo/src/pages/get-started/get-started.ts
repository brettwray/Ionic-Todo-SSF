import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from './../account/account';

/**
 * Generated class for the GetStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-started',
  templateUrl: 'get-started.html',
})
export class GetStartedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login(){
    this.navCtrl.push(AccountPage)
  }
  ionViewDidLoad() {
    
  }
  
}

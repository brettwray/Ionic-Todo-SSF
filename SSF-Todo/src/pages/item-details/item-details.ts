import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import * as moment from '../../../node_modules/moment'

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  title;
  description;
  dateCreated;
 
  constructor(public navParams: NavParams){

  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.dateCreated = moment().format("dddd, MMMM Do YYYY");
  }
    

}

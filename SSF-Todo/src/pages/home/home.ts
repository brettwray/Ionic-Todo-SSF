import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailsPage } from '../item-details/item-details';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public Data: DataProvider) {

    this.Data.getData().then((todos) => {
      if (todos) {
        this.items = todos;
      }
    });

  }
  ionViewDidLoad(){
   }
  
   addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }


  saveItem(item){
    this.items.push(item);
    this.Data.save(this.items);
  }
  viewItem(item){
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  removeItem(value) {
    this.items = this.items.filter(item => item !==value)
  }
}


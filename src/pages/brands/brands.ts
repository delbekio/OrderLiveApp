import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { OrderApi } from '../../shared/shared';
import { ProductsPage } from '../pages';
/*
  Generated class for the Brands page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {
brands: any;
  constructor(public nav: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public orderApi: OrderApi) {}

 itemTapped($event, brand){
    this.nav.push(ProductsPage, brand); 
  }              

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
     let loader = this.loadingController.create({
      content: 'Getting Brands...'
      //spinner: 'dots'
    });
    
    this.orderApi.getBrands().then(data => {
        this.brands = data;
        loader.dismiss();
      });
  }

}

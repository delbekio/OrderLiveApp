import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrandsPage, FavouritesPage, CartPage, OrdersPage } from '../pages';
import { CartApi } from '../../shared/shared';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  brandsPage = BrandsPage;
  favouritesPage = FavouritesPage;
  cartPage = CartPage;
  ordersPage = OrdersPage;
  public totalItemsCart = 0;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public cartApi: CartApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.totalItemsCart = this.cartApi.getTotalQty();
  }

  /*ionViewWillEnter(){
    console.log('ionViewWillEnter DashboardPage');
    console.log('before',this.totalItemsCart);
    this.totalItemsCart = this.cartApi.getTotalQty();
    console.log('after',this.totalItemsCart);
  }*/

  

}

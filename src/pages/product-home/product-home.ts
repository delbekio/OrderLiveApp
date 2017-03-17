import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {CartApi} from '../../shared/shared';

/*
  Generated class for the ProductHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-home',
  templateUrl: 'product-home.html'
})
export class ProductHomePage {
  product: any;
  qty:any;
  totalPrice;
  order: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartApi: CartApi) {
    this.product = navParams.data;
    this.qty = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductHomePage');
  }


  // increment product qty
  incrementQty() {
    console.log(this.qty+1);
    this.qty += 1;
    this.totalPrice = this.qty * this.product.price;
  }

  // decrement product qty
  decrementQty() {
    if(this.qty-1 < 1 ){
      this.qty = 1
      console.log('1->'+this.qty);
    }else{
      this.qty -= 1;
      console.log('2->'+this.qty);
    }
    this.totalPrice = this.qty * this.product.price * (1 - this.product.discount);
    
  }

  addToCart(){
    this.order.qty=this.qty;
    this.order.prdItemId=this.product.Id
    this.order.Brand=this.product.Brand
    this.order.Group=this.product.Group
    this.order.Item=this.product.Item
    this.order.Item_No=this.product.Item_No;
    this.order.price=this.product.price
    this.order.discount=this.product.discount
    this.cartApi.addtoCart(this.order);
  }

}

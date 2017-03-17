import { Injectable } from '@angular/core';


import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { OrderApi } from './shared';

@Injectable()
export class CartApi {
    private baseUrl = 'https://orderliveapp.firebaseio.com';
    currentBrand: any = {};
    private cartData = [];

    constructor() { }

   addtoCart(order){
       //check if this productId already exist in the cart. if exist then increment the count, else add
    if(this.cartData[order.prdItemId]){
        this.cartData[order.prdItemId].qty = this.cartData[order.prdItemId].qty + order.qty;
    }else{
        this.cartData[order.prdItemId] = order;
    }
    console.log('inside add to cart');
   }
   
   getTotalQty(){
       let totalQty:number = 0;
       for (let order of this.cartData){
           totalQty += order.qty;
       }
       return totalQty;
   }
   
   getCart(){
       return this.cartData;
   }

   removeFromCart(productId){
        var index = this.cartData.indexOf(productId, 0);
        if (index > -1) {
            this.cartData.splice(index, 1);
        }
   }
   
   emptyCart(){
       this.cartData = [];
   }

}
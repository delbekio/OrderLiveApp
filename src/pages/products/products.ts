import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import _ from 'lodash';
import { OrderApi } from '../../shared/shared';
import { ProductHomePage } from '../../pages/pages';

/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  private allProducts: any;
  private allGroupsProducts: any;
  products = [];
  queryText: string = '';

  constructor(public nav: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public orderApi: OrderApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
        let selectedBrand = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting products...'
    });

    loader.present().then(() => {
      this.orderApi.getBrandData(selectedBrand.id).subscribe(data => {
        this.allProducts = data;
        this.allGroupsProducts =
            _.chain(data)
            .groupBy('Group')
            .toPairs()
            .map(item => _.zipObject(['groupName', 'groupProducts'], item))
            .value();

        this.products = this.allGroupsProducts;
        console.log('Group Products', this.products); 
        loader.dismiss();
      });
    });
  }

    itemTapped($event, product){
    this.nav.push(ProductHomePage, product); 
  }

}

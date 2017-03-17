import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { LoginPage } from '../pages/pages';
import { RegisterPage } from '../pages/pages';
import { SettingsPage } from '../pages/pages';
import { DashboardPage } from '../pages/pages';
import { FavouritesPage } from '../pages/pages';
import { CartPage } from '../pages/pages';
import { BrandsPage } from '../pages/pages';
import { ProductsPage } from '../pages/pages';
import { PromotionsPage } from '../pages/pages';
import { OrdersPage } from '../pages/pages';
import { OrderDetailsPage } from '../pages/pages';
import { OrderDispatchPage } from '../pages/pages';
import { ContactusPage } from '../pages/pages';
import { Pages } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Pages[];

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Tdwo', component: Page2 },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Favourites', component: FavouritesPage },
      { title: 'Promotions!', component: PromotionsPage },
      { title: 'My Orders', component: OrdersPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Contact Us', component: ContactusPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('Inside openPage', page);
    this.nav.push(page.component);
  }
}

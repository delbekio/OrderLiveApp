import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
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
import { ProductHomePage } from '../pages/pages';
import { Pages } from '../pages/pages';
import { OrderApi } from '../shared/shared';
import { CartApi } from '../shared/shared';



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    SettingsPage,
    DashboardPage,
    FavouritesPage,
    CartPage,
    BrandsPage,
    ProductsPage,
    PromotionsPage,
    OrdersPage,
    OrderDetailsPage,
    OrderDispatchPage,
    ContactusPage,
    ProductHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    SettingsPage,
    DashboardPage,
    FavouritesPage,
    CartPage,
    BrandsPage,
    ProductsPage,
    PromotionsPage,
    OrdersPage,
    OrderDetailsPage,
    OrderDispatchPage,
    ContactusPage,
    ProductHomePage
  ],
  providers: [    
    OrderApi,
    CartApi,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ModalPage } from '../pages/modal/modal';
import { AddShoppingPage} from '../pages/add-shopping/add-shopping';
import {DataPage} from '../pages/data/data';
import { EditShoppingItemPage} from '../pages/edit-shopping-item/edit-shopping-item';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    ModalPage,
    DataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],                   
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    ModalPage,
    DataPage      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

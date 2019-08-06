import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})             
export class ShoppingListPage {
                 
  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public admob: AdMobFree, public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.shoppingListRef$ = this.database.list('shopping-list');
  }
  ionViewDidLoad () {
           
console.log('working')
           

// let bannerConfig: AdMobFreeBannerConfig = {
//   isTesting: false, // Remove in production
//   autoShow: true, 
//   id: "ca-app-pub-9784974231819956/5650429734"
// };         
              
// this.admob.banner.config(bannerConfig);

// this.admob.banner.prepare().then(() => {
//   console.log('benner working')
// }).catch(e => console.log(e, 'error'));
  }              
  selectShoppingItem(shoppingItem:ShoppingItem) {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id: 'ca-app-pub-9784974231819956/4155129631'
  }; 
  
  this.admob.interstitial.config(interstitialConfig);
  
  this.admob.interstitial.prepare().then(() => {
     console.log('interstial working')
  }).catch(e => console.log(e, 'error'));           
    this.navCtrl.push(EditShoppingItemPage, 
      { shoppingItemId: shoppingItem.$key })
   
  }
  
                  

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }
}                 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  
  shoppingItemSubscription: Subscription;
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>
  shoppingItem = {} as ShoppingItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,public admob: AdMobFree, private database: AngularFireDatabase) {
  const shoppingItemId = this.navParams.get('shoppingItemId');

  this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);

  this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(shoppingItem => this.shoppingItem = shoppingItem);
  }
  ionViewDidLoad () {
               

//     let interstitialConfig: AdMobFreeInterstitialConfig = {
//       isTesting: false, // Remove in production
//       autoShow: true, 
//       id: 'ca-app-pub-9784974231819956/8094374646'
//   }; 
            
//   this.admob.interstitial.config(interstitialConfig);
  
//   this.admob.interstitial.prepare().then(() => {
//     console.log('interstial working')
//  }).catch(e => console.log(e, 'error'));  
  
    }                         

  editShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.update(shoppingItem);
    this.navCtrl.pop();
  }
  
  ionViewWillLeave() {
    this.shoppingItemSubscription.unsubscribe();
  }
}

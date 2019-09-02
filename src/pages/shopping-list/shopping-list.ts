import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ModalPage } from '../modal/modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',        
})             
export class ShoppingListPage {          
                                                                                             
  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public admob: AdMobFree, private socialSharing: SocialSharing, public navCtrl: NavController, public modalCtrl : ModalController,  public navParams: NavParams,private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
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
                            
  share () {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id: 'ca-app-pub-9784974231819956/8094374646'
  }; 
                                                     
  this.admob.interstitial.config(interstitialConfig);
  
  this.admob.interstitial.prepare().then(() => {
     console.log('interstial working')
  }).catch(e => console.log(e, 'error')); 
  this.socialSharing.share("checkout modicare products - https://play.google.com/store/apps/details?id=com.modi.app&hl=en", null, null, null);
           
  }
  public openModal(){ 
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id: 'ca-app-pub-9784974231819956/5248434044'
  }; 
                                             
  this.admob.interstitial.config(interstitialConfig);
  
  this.admob.interstitial.prepare().then(() => {
     console.log('interstial working')
  }).catch(e => console.log(e, 'error')); var modalPage = this.modalCtrl.create(ModalPage); modalPage.present(); }       

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }
}                            
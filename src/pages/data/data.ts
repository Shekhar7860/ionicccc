import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})                               
export class DataPage {         
      name : any;
      mobile : any;
      location : any;  
      list : any = [];             
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.list = this.database.list('users');
                      
  }                                          
                                   
  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
     
  submit() {   
    if(this.name && this.mobile && this.location)
    {
    this.list.push({
      name : this.name,
      mobile : this.mobile,
      location : this.location
    });  
    alert("submitted successfully!")
  }        
  else
  {
    alert("please fill all detailss")
  }
  }

  skip () {         
    this.navCtrl.push(ShoppingListPage)
  }
}          
        
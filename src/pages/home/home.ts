import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import {  AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController, private adMobFree: AdMobFree,public platform: Platform) {
	var temp = this;
	setTimeout(function(){
		//temp.createBanner();
		//temp.showInterstitial();
	},2000)
	 platform.ready().then(() => {
		this.createBanner();
		this.showInterstitial();
    });
	
  }
  
   createBanner(){
  let toast = this.toastCtrl.create({
     message: 'Creating your ad',
     duration: 3000,
     position: 'top'
   });
   toast.present();
   const bannerConfig: AdMobFreeBannerConfig = {
     // add your config here
     // for the sake of this example we will just use the test config
     isTesting: true,
     autoShow: true
   };
   this.adMobFree.banner.config(bannerConfig);

   this.adMobFree.banner.prepare()
   .then(() => {
     // banner Ad is ready
     // if we set autoShow to false, then we will need to call the show method here
   })
   .catch(e => console.log(e));

 }
 showInterstitial() {
		let toast = this.toastCtrl.create({
     message: 'Creating your Interstitial',
     duration: 3000,
     position: 'top'
   });
   toast.present();
   
        this.adMobFree.interstitial.config({
          //id: 'ca-app-pub-3940256099942544/1033173712',
		  isTesting: true,
          autoShow: true
        });
        this.adMobFree.interstitial.prepare();
    }


}

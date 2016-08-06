import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RockbandPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/rockband/rockband.html',
})
export class RockbandPage {

  rockband: any;

  constructor(
    private navCtrl: NavController,
    private params: NavParams
  ) {
    this.rockband = this.params.get('rockband');
  }

}

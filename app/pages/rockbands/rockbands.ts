import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RockbandPage } from '../rockband/rockband';

@Component({
  templateUrl: 'build/pages/rockbands/rockbands.html',
})
export class RockbandsPage {

  rockbands: any[];

  constructor(
    private navCtrl: NavController
  ) {
    this.rockbands = [
      {
        name: 'Nirvana',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_(Nirvana)_album_cover.jpg',
        year: 1903,
        voice: 'Curbsdsd',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        name: 'The beatles',
        image: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/995/MI0003995354.jpg',
        year: 1903,
        voice: 'lennon',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        name: 'Kudai',
        image: 'http://static.t13.cl/images/sizes/1200x675/1453456341-kudai.jpg',
        year: 1903,
        voice: 'kdjfghjkdfg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        name: 'Panda',
        image: 'http://entretenimiento.starmedia.com/imagenes/2015/12/Pxndx-Panda-660.jpg',
        year: 1903,
        voice: 'kjsdfskj',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ];
  }

  goToRockbandPage( rockband ){
    this.navCtrl.push( RockbandPage, {
      rockband: rockband
    });
  }

}

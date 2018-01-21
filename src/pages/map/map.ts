import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
	$map: any;
	constructor(public navCtrl: NavController){}
	ngAfterViewInit(){
		this.$map = new window.AMap.Map('amap',{
            resizeEnable: true,
            zoom: 10,
            // center: [116.480983, 40.0958]
        })
        // console.log(map)
	}
}
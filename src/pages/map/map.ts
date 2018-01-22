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
		if('AMap' in window){
      const AMap = window['AMap']
      this.$map = new window['AMap'].Map('amap',{
          resizeEnable: true,
          // pitch:75,
          viewMode:'2D',
          // zoom: 17,
          // expandZoomRange:true,
          // zooms:[3,20]
          // center: [116.480983, 40.0958]
      })
      this.$map.clearMap()
     /* console.log(this.$map)
      console.log(this.$map.getCenter())
      const $b = this.$map.getBounds()
      console.log($b)
      console.log([$b.getCenter()])*/

      this.$map.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        this.$map.addControl(geolocation)
        console.log(geolocation.getCurrentPosition())
        AMap.event.addListener(geolocation, 'complete', info => {
          const mark = new window['AMap'].Marker({position: info.position})
          mark.setMap(this.$map)
          /*this.$map.getCity(info => {
            console.log(info)
          })*/
          console.log({info})
        })
        AMap.event.addListener(geolocation, 'error', e => {
          console.log(e)
        })
      })
    }
	}
}

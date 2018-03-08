import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as amap from 'hhb-amap'
import {MapPageSearch} from './modules/search'
import * as http from 'hhb-http'
import * as user from 'hhb-userauth'
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  $map: any;
  constructor(public navCtrl: NavController){
    this.$http = http()
    // console.log(http())
    // console.log(this.$http.config.map['QUERY:USER:NEAR_LIST'])
  }
  async ngAfterViewInit(){
    // 渲染一个map
    const $map = amap.render('amap')
    // $map.plugin('AMap.Geolocation', function() {
      let geolocation = new amap.amap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: false, //true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      $map.addControl(geolocation);
      geolocation.getCurrentPosition();
      let mainMark, list
      amap.amap.event.addListener(geolocation, 'complete', async (info) => {
        if(!mainMark){
          mainMark = new amap.amap.Marker({position: info.position})
          mainMark.setMap($map)
          list = await this.$http.curl('QUERY:USER:NEAR_LIST', {
              "distance": 0,
              "group": null,
              "latitude": info.position.lat,
              "longitude": info.position.lng,
              "userId": user.id
            })
          // console.log(mainMark)
          console.log(list)
        }else{
          mainMark.setPosition(info.position)
        }

      });//返回定位信息


      // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    // });
    /*let scale = new amap.amap.Scale({
      visible: false
    })

    $map.addControl(scale)*/
    // amap.geo.getCurrentPosition()
    // console.log({amap})
    /*var toolBar;
    var customMarker = new amap.amap.Marker({
        offset: new amap.amap.Pixel(-14, -34),//相对于基点的位置
        icon: new amap.amap.Icon({  //复杂图标
            size: new amap.amap.Size(27, 36),//图标大小
            image: "http://webapi.amap.com/images/custom_a_j.png", //大图地址
            imageOffset: new amap.amap.Pixel(-28, 0)//相对于大图的取图位置
        })
    });
    //初始化地图对象，加载地图
    //地图中添加地图操作ToolBar插件
    $map.plugin(["AMap.ToolBar"], function() {
        toolBar = new amap.amap.ToolBar({locationMarker: customMarker}); //设置地位标记为自定义标记
        $map.addControl(toolBar);
    });
    toolBar.doLocation()*/
    // 获取当前用户位置
    amap.on('COMPLETE', info => {
      // $map.clearMap()
      // scale.show()
      // $map.setCenter(new $map.amap.LngLat(info.position.lng, info.position.lat))
      // const marker = new amap.amap.Marker({position: info.position, zoom: $map.getZoom()})
      // marker.setMap($map)
      // console.log(marker)
    })
    // 监听
    // return await amap.listen()
    /*const $loader = amap.loader
    $loader.on('READY', AMap => {
      $loader.on('COMPLETE', info => {
        console.log(info)
      })
    })
    return await $loader.create()*/
  }
  openSearch(){
    this.navCtrl.push(MapPageSearch)
  }
  getItems(){}
}

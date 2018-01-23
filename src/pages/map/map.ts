import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as amap from 'hhb-amap'

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  $map: any;
  constructor(public navCtrl: NavController){}
  async ngAfterViewInit(){
    // 渲染一个map
    const $map = amap.render('amap')
    // amap.geo.getCurrentPosition()
    // 获取当前用户位置
    amap.on('COMPLETE', info => {
      $map.clearMap()
      const marker = new amap.amap.Marker({position: info.position, zoom: $map.getZoom()})
      marker.setMap($map)
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
}

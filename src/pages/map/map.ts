import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as amap from 'hhb-amap'
import {MapPageSearch} from './modules/search'
import * as http from 'hhb-http'
import * as user from 'hhb-userauth'
import {ServicePage} from '../service'
import * as $message from 'hhb-message'
import { Network } from '@ionic-native/network';
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  $map: any;
  private subscribe
  private markList = {}
  constructor(public navCtrl: NavController,
  public network: Network){
    this.$http = http()
    // console.log(http())
    // console.log(this.$http.config.map['QUERY:USER:NEAR_LIST'])
  }
  private $http;
  async ngAfterViewInit(){
    // 渲染一个map
    // this.subscribe = this.network.onConnect().subscribe(() => {

      this.$map = amap.render('amap')
      amap.amap.plugin('AMap.Geolocation', () => {
        let geolocation = new amap.amap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          // GeoLocationFirst: true,
          // noIpLocate: 3,
          // useNative: true,
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: false, //true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        this.$map.addControl(geolocation);
        geolocation.getCurrentPosition();
        // let mainMark, list
        // 图表点击跳转列表页
        // amap.on('CLICK:MARKER', data => this.navCtrl.push(ServicePage, {uid: data.fromUserId}))
        let friend = []
        amap.amap.event.addListener(geolocation, 'complete', async (info) => {
          this.renderList([{
            fromUserId: user.id,
            position: info.position
          }])
          if(friend.length === 0){
            this.$map.setZoom(17)
            const res = await this.$http.curl('QUERY:USER:NEAR_LIST', {
              "distance": 0,
              "group": null,
              "latitude": info.position.lat,
              "longitude": info.position.lng,
              "queryUserId": user.id
            })
            friend = res && res.data || []


            this.renderList(friend)
          }
        //   if(!mainMark){
        //     mainMark = new amap.amap.Marker({position: info.position, icon: new amap.amap.Icon({  //复杂图标
        //       size: new amap.amap.Size(27, 36),//图标大小
        //       image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png", //大图地址
        //       // imageOffset: new amap.amap.Pixel(-28, 0)//相对于大图的取图位置
        //     })})
        //     this.$map.setZoom(17)
        //     mainMark.setMap(this.$map)
        //     // console.log(amap.amap.event)
        //     amap.amap.event.addListener(mainMark, 'click', e => {
        //       // alert(1)
        //       this.navCtrl.push(ServicePage)
        //     })
        //     const res = await this.$http.curl('QUERY:USER:NEAR_LIST', {
        //         "distance": 0,
        //         "group": null,
        //         "latitude": info.position.lat,
        //         "longitude": info.position.lng,
        //         "userId": user.id
        //       })
        //     list = res && res.data || []
        //     if(Array.isArray(list)){
        //       amap.renderMarkList(list)
        // // this.$map.plugin('AMap.Geolocation', function() {
        //     }
        //   }else{
        //     mainMark.setPosition(info.position)
        //   }
        // });//返回定位信息
        // // 实时刷新用户定位
        // $message.on('NORMAL', data => {
        //   amap.renderMarkList([data.message])
        })
        $message.on('NORMAL', data => {
          // console.log({data})
          this.renderList([data.message])
        })
        // 获取当前用户位置
        amap.on('COMPLETE', info => {
          if(info.type !== 'normal' || info.fromUserId === user.id){
            return
          }
          // amap.renderMark(info)
          this.renderList([info])
          // console.log(info)
        })
      })
    // })

  }
  openSearch(){
    this.navCtrl.push(MapPageSearch)
  }
  getItems(){}

  renderList(list){
    // console.log(this.markList)
    list.forEach(info => {
      const {fromUserId} = info
      let lat = info.position && (info.position.lat || info.position.latitude) || info.latitude
      let lng = info.position && (info.position.lng || info.position.longitude) || info.longitude
      // console.log(info)
      if(!this.markList[fromUserId]){
        this.markList[fromUserId] = new amap.amap.Marker({position: info.position, icon: new amap.amap.Icon({  //复杂图标
          size: new amap.amap.Size(27, 36),//图标大小
          ...(() => user.id == fromUserId ? {
            image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png", //大图地址
          } : {})()
        })})
        // alert(fromUserId)
        // console.log(amap.amap.event, this.markList[fromUserId])
        amap.amap.event.clearListeners(this.markList[fromUserId], 'click')
        // this.markList[fromUserId].on('click', e => alert(11))
        amap.amap.event.addListener(this.markList[fromUserId], 'click', e => {
          // alert()
          this.navCtrl.push(ServicePage, {id: fromUserId})
        })
        this.markList[fromUserId].setMap(this.$map)
      }else{
        this.markList[fromUserId].setPosition([lng, lat])
      }
    })
  }

  ngOnDestroy(){
    // 清除地图的mark
    // this.$map.clearMap()
    // amap.clearMarker()
    this.markList = {}
    this.subscribe && this.subscribe.unsubscribe()
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import * as $message from 'hhb-message'
import moment from 'moment'
import { Serve } from '../../providers/serve'
import {$msg} from 'strophe.js'
import * as user from 'hhb-userauth'

@Component({
  selector: 'message-content',
  templateUrl: 'index.html'
})

export class MessageContent {
	private serve: Serve
	list: any[] = []
	private loaded = false
	private page = 1
	get user(){
		return user.state
	}
	friend: any = {}
	storage: Storage
	constructor(public navCtrl: NavController, navParams: NavParams, storage: Storage, serve: Serve) {
		this.storage = storage
		this.friend = navParams.get('info')
		this.serve = serve
		this._updateFriendList()
		// console.log(this.friend)
		$message.on('MESSAGE', mess => {
			// console.log({mess})
			const r = new RegExp(`^${this.friend.id}@`)
			if(!r.test(mess.from)){
				return
			}
			let {message} = mess
			// const arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}
		    // message = message.replace(/&(lt|gt|nbsp|amp|quot);/ig,(all,t) => arrEntities[t])
			this.list.push({
				'faceUrl': this.friend.imageUri,
				'isOwn': false,
				'message': message,
				'time': moment().format('hh:ii:ss')
			})
		})

	}

	async _renderHistoryList(page?: number){
		// console.log(this.serve)
		const list = await this.serve.queryHistoryList(this.friend.id, user.id, page || this.page)
		if(!list){
			this.loaded = true
		}
		return this.list = list
		// return this.list = 
	}

	async _updateFriendList(){
		// let oldList =

		await this._renderHistoryList()
		return this.storage.get('FRIEND_LIST').then(list => {
			if(!list){
				return this.storage.set('FRIEND_LIST', [this.friend])
			}
		})
	}

	ngOnChanges(){
		// console.log(arguments)
	}

	ngOnInit(){
		// console.log(arguments)
	}
    async doRefresh(refresher){
		if(this.loaded){
			return refresher.complete();
		}
		this.page++
		await this._updateFriendList()
		return refresher.complete()
    }

	send(){
		let el: any = document.querySelector('#content')
		let message: string = el.value || ''
		console.log({message})
		if(!message){
			return
		}
		const arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}
		message = message.replace(/&(lt|gt|nbsp|amp|quot);/ig,(all,t) => arrEntities[t])
		// console.log({message})
		const mess = $msg({
			'to': `${this.friend.id}@${this.friend.name}`,
			'from': `${this.user.id}@${this.user.name}`,
			'type': 'chat'
		}).c('body', null, message)
		//
		$message.send(mess.tree())
		//
		this.list.push({
			'faceUrl': this.friend.imageUri, //'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
			'isOwn': true,
			message
			//'message': 'I am back',
			// 'time': '2017-12-30 12:30:51'
		})
		el.value = ""
	}
}

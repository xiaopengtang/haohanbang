import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import * as $message from 'hhb-message'
import moment from 'moment'
import { Serve } from '../../providers/serve'
import {$msg} from 'strophe.js'

@Component({
  selector: 'message-content',
  templateUrl: 'index.html'
})

export class MessageContent {
	private serve: Serve
	list: any[] = [{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'isOwn': false,
		'message': 'hi,jim',
		'time': '2017-12-30 12:30:51'
	}]
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
			this.list.push({
				'faceUrl': this.friend.imageUri,
				'isOwn': false,
				'message': mess.message,
				'time': moment().format('hh:ii:ss')
			})
		})

	}

	async _renderHistoryList(){
		// console.log(this.serve)
		return this.list = await this.serve.queryHistoryList(this.friend.id, '000000001')
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

	send(){
		let message: string = document.querySelector('#content').innerHTML || ''
		if(!message){
			return
		}
		const arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}
		message = message.replace(/&(lt|gt|nbsp|amp|quot);/ig,(all,t) => arrEntities[t])
		// console.log({message})
		const mess = $msg({
			'to': '',
			'from': '',
			'type': 'normal'
		}).c('body', null, message)
		//
		$message.send(mess.tree())
		//
		this.list.push({
			'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
			'isOwn': true,
			message
			//'message': 'I am back',
			// 'time': '2017-12-30 12:30:51'
		})
		document.querySelector('#content').innerHTML = ""
	}
}

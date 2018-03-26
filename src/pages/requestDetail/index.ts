import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams, ToastController } from 'ionic-angular';
import { Service } from './index.service'
import { ModalApply } from './modules/apply'
import * as $http from 'hhb-http'
import * as user from 'hhb-userauth'

@Component({
	selector: 'page-request-detail',
	templateUrl: 'index.html'
})

export class RequestDetailPage implements OnInit {
	private orderId: string;
	info: any = {};
	private $http;
	// public $server: Service;
	constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public $server: Service, private toastCtrl: ToastController) {
		this.orderId = navParams.get('orderId')
		this.$http = $http()
	}

	async updateInfo() {
		const res = await this.$server.queryDetail(this.orderId)
		// console.log(res)
		return this.info = res.data || {}
	}

	async ngAfterViewInit() {
		return await this.updateInfo()
	}
	ngOnInit() {
	}
	reply() {
		let prompt = this.alertCtrl.create({
			title: '评论',
			// message: "Enter a name for this new album you're so keen on adding",
			inputs: [
				{
					name: 'message',
					placeholder: '请输入评论信息'
				},
			],
			buttons: [
				{
					text: '取消',
					handler: (data) => {
						console.log('Cancel clicked');
					}
				},
				{
					text: '评论',
					handler: async (data) => {
						const res = await this.$http.curl('SAVE:ORDER:APPLY_MESSAGE', {
							// "ip": "string",
							"message": data.message,
							"orderId": this.orderId,
							"userId": user.id
						})
						// console.log(res)
						let toast
						if (res && res.code) {
							toast = this.toastCtrl.create({
								message: '评论成功',
								duration: 2000,
								position: 'top'
							});
							await this.updateInfo()
							// console.log('Saved clicked', data);
						} else {
							toast = this.toastCtrl.create({
								message: '评论失败',
								duration: 2000,
								position: 'top'
							});
						}
						toast.present();
					}
				}]
		});
		prompt.present();
	}

	applyOrder() {
		let orderId = this.orderId
		let modal = this.modalCtrl.create(ModalApply, { orderId });
		modal.present();
	}

	// 确认完成
	async confirmOrder() {
		let req = this.$http.curl('ORDER:REQUEST:CONFIRM', {
			"orderId": this.orderId,
			"userId": user.id
		});
	}
}

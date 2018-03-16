import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
// import { HttpModule }    from '@angular/http';
import {ComponentsModule} from '../../components/index.module'

import {Service} from './index.service'

import {RequestDetailPage} from './index'

import { ModalApply} from './modules/apply'

@NgModule({
	declarations: [RequestDetailPage, ModalApply],
	imports: [IonicModule.forRoot(RequestDetailPage), ComponentsModule],
	entryComponents: [RequestDetailPage, ModalApply],
	exports: [RequestDetailPage],
    providers: [Service],
    bootstrap: [RequestDetailPage]
})
export class RequestDetailModule {}

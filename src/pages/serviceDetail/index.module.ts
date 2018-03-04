import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
// import { HttpModule }    from '@angular/http';
import {ComponentsModule} from '../../components/index.module'

import {Service} from './index.service'

import {SerivceDetailPage} from './index'

import { ModalApply} from './modules/apply'

@NgModule({
	declarations: [SerivceDetailPage, ModalApply],
	imports: [IonicModule.forRoot(SerivceDetailPage), ComponentsModule],
	entryComponents: [SerivceDetailPage, ModalApply],
	exports: [SerivceDetailPage],
    providers: [Service],
    bootstrap: [SerivceDetailPage]
})

export class ServiceDetailModule {}

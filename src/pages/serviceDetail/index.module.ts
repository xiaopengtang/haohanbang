import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
// import { HttpModule }    from '@angular/http';
import {ComponentsModule} from '../../components/index.module'

import {Service} from './index.service'

import {SerivceDetailPage} from './index'

@NgModule({
	declarations: [SerivceDetailPage],
	imports: [IonicModule.forRoot(SerivceDetailPage), ComponentsModule],
	entryComponents: [SerivceDetailPage],
	exports: [SerivceDetailPage],
    providers: [Service],
    bootstrap: [SerivceDetailPage]
})

export class ServiceDetailModule {}

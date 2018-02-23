import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {SerivceDetailPage} from './index'
// import {ComServiceItem} from '../../components'

@NgModule({
	declarations: [SerivceDetailPage],
	imports: [IonicModule.forRoot(SerivceDetailPage)],
	entryComponents: [SerivceDetailPage],
	exports: [SerivceDetailPage]
})

export class ServiceDetailModule {}
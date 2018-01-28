import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {ServicePage} from './index'
// import {ComServiceItem} from '../../components'

@NgModule({
	declarations: [ServicePage],
	imports: [IonicModule.forRoot(ServicePage)],
	entryComponents: [ServicePage],
	exports: [ServicePage]
})

export class ServiceModule {}
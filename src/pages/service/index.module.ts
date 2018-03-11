import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {ServicePage} from './index'
// import {ComServiceItem} from '../../components'
import {ComponentsModule} from '../../components/index.module'

@NgModule({
	declarations: [ServicePage],
	imports: [IonicModule.forRoot(ServicePage), ComponentsModule],
	entryComponents: [ServicePage],
	exports: [ServicePage]
})

export class ServiceModule {}
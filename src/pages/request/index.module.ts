import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {RequestPage} from './index'
// import {ComServiceItem} from '../../components'
import {ComponentsModule} from '../../components/index.module'

@NgModule({
	declarations: [RequestPage],
	imports: [IonicModule.forRoot(RequestPage), ComponentsModule],
	entryComponents: [RequestPage],
	exports: [RequestPage]
})

export class RequestModule {}
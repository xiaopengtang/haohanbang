import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {MapPage} from './map'
import {MapPageSearch} from './modules/search'
// import {ComServiceItem} from '../../components'

@NgModule({
	declarations: [MapPage, MapPageSearch],
	imports: [IonicModule.forRoot(MapPage)],
	entryComponents: [MapPage, MapPageSearch],
	exports: [MapPage, MapPageSearch]
})

export class MapModule {}
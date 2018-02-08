import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {MapPage} from './map'
import {MapPageSearch} from './modules/search'
import {ComponentsModule} from '../../components/index.module'

@NgModule({
	declarations: [MapPage, MapPageSearch],
	imports: [IonicModule.forRoot(MapPage), ComponentsModule],
	entryComponents: [MapPage, MapPageSearch],
	exports: [MapPage, MapPageSearch]
})

export class MapModule {}

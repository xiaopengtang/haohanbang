import { NgModule } from '@angular/core';
import {ComServiceItem} from './service-item'

import {ComApplyList} from './apply-list'

import {ComUserCard} from './user-card'

import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [ComServiceItem, ComUserCard, ComApplyList],
  imports: [IonicModule.forRoot(ComServiceItem)],
  exports: [ComServiceItem, ComUserCard, ComApplyList]
})
export class ComponentsModule {}

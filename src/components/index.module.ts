import { NgModule } from '@angular/core';
import {ComServiceItem} from './service-item'
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [ComServiceItem],
  imports: [IonicModule.forRoot(ComServiceItem)],
  exports: [ComServiceItem]
})
export class ComponentsModule {}

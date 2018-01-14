import { NgModule } from '@angular/core';
import { MessagePage } from './index'
import { IonicModule } from 'ionic-angular';
import { MessageItem } from './components/item'
import { MessageContent } from './modules/content'

@NgModule({
	declarations: [MessagePage, MessageItem, MessageContent],
	imports: [IonicModule.forRoot(MessagePage)],
	entryComponents: [MessagePage, MessageItem, MessageContent],
	exports: [MessagePage]
})

export class MessageModule {}
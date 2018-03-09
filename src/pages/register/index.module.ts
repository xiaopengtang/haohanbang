import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {RegisterPage} from './index';
import {Service} from './index.service';

@NgModule({
	declarations: [RegisterPage],
	imports: [IonicModule.forRoot(RegisterPage)],
	entryComponents: [RegisterPage],
	exports: [RegisterPage],
    providers: [Service],
    bootstrap: [RegisterPage]
})

export class RegisterModule {}

import { NgModule } from '@angular/core';
// import { IonicModule } from 'ionic-angular';

import {ComServiceItem} from './service-item' 
// import {ComServiceItem} from '../../components'
// import MyApp from '../app/app.component'

var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    /**
     * Set the root app component for you ComponentsModule
     * @param {any} appRoot The root AppComponent for this app.
     * @param {any} config Config Options for the app. Accepts any config property.
     * @param {any} deepLinkConfig Any configuration needed for the Ionic Deeplinker.
     */
    ComponentsModule.forRoot = function (appRoot, config, deepLinkConfig) {
        if (config === void 0) { config = null; }
        if (deepLinkConfig === void 0) { deepLinkConfig = null; }
        return {
            ngModule: ComponentsModule,
            providers: [
            ]
        };
    };
    ComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ComServiceItem
                    ],
                    imports: [
                        ComServiceItem
                    ],
                    exports: [
                        ComServiceItem
                    ],
                    entryComponents: [
                    ]
                },] },
    ];
    /** @nocollapse */
    ComponentsModule.ctorParameters = function () { return []; };
    return ComponentsModule;
}());
export { ComponentsModule };
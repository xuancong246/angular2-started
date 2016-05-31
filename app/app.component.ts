import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Product List</h1>
        <pm-products></pm-products>
    `,
    directives: [ ProductListComponent ]
})
export class AppComponent { //Setup tsconfig.json to ...
    //Define properties and methods    
}
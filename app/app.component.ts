import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <pm-products></pm-products>
        <table><thead><th>No change color</th></thead><tbody><tr><td>No change size</td></tr></tbody></table>
    `,
    directives: [ ProductListComponent ]
})
export class AppComponent { //Setup tsconfig.json to ...
    //Define properties and methods    
}
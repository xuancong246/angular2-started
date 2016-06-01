import { Component } from 'angular2/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styles: ['thead { color: navy; }', 'td { color: red; font-size: 50px; }']
})
export class ProductListComponent {}
import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    providers: [HTTP_PROVIDERS, ProductService]
})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {        
    };
    
    pageTitle: string = 'Product List';
    tempDate: Date = new Date();
    enableCheckboxes = false;
    products: any = [];
    
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => console.log(error));
    }
    
    toggleEnableCheckboxes(): void {
        this.enableCheckboxes = !this.enableCheckboxes;
    }
}
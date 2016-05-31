import { Component } from 'angular2/core';

@Component({
    selector: 'pm-products',
    template: `
        <table class='table'>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sample</td>
                    <td>Sample2</td>
                </tr>
            </tbody>
        </table>
    `
})
export class ProductListComponent {}
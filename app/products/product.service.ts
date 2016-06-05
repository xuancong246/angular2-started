import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    _productUrl: string = 'api/products/products.json';
    
    constructor(private _http: Http) {}
    
    getProducts(): Observable<any[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
}
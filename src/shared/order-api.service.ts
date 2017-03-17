import { Injectable } from '@angular/core';
import { Http /*, Response*/ } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { brand } from '../objects/objects';

@Injectable()
export class OrderApi {
    private baseUrl = 'https://orderliveapp.firebaseio.com';
    currentBrand: any = {};
    private brandData = {};

    constructor(public http: Http) { }

    getBrands(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/brands.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

    getBrandData(brandId, forceRefresh: boolean = false) : Observable<any> {
        if (!forceRefresh && this.brandData[brandId]) {
            this.currentBrand = this.brandData[brandId];
            console.log('**no need to make HTTP call, just return the data',brandId); 
            return Observable.of(this.currentBrand);
        }

        // don't have data yet
        console.log('**about to make HTTP call',brandId);
        return this.http.get(`${this.baseUrl}/products/${brandId}.json`)
            .map(response => {
                this.brandData[brandId] = response.json();
                this.currentBrand = this.brandData[brandId];
                console.log('**about to make HTTP call',this.currentBrand);
                return this.currentBrand;
            });
    }

    getcurrentBrand(){
        return this.currentBrand;
    }

    refreshcurrentBrand(){
        return this.getBrandData(this.currentBrand.tournament.id, true); 
    }
}
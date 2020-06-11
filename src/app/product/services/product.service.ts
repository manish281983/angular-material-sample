import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from 'src/app/core/data-config-key';
import { AppConfig } from 'src/app/core/models/app-config.model';
import { ApiService } from '../../core/services/api.service';
import { ProductInterface } from './product.interface';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import mockProductList from '../../../assets/json/product-list.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterface {

  constructor(@Inject(APP_CONFIG) public appConfig: AppConfig, private api: ApiService, private http: HttpClient) {
  }

  getProductList(): Observable<any>  {
    const url: string = this.appConfig.product.get.url;
    const product = null;
    const data = new Observable((observer) => {
      observer.next(mockProductList)
      observer.complete()
    });
    return data;
  }

  createProduct(product: Product) {
    return new Observable((observer) => {
      observer.next(product)
      observer.complete()
    });
  }

  updateProduct(product: Product) {
    return new Observable((observer) => {
      observer.next(product)
      observer.complete()
    });
  }

  deleteProduct(product: Product) {
    return new Observable((observer) => {
      observer.next(product)
      observer.complete()
    });
  }
}

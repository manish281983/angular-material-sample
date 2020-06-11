import { Injectable } from '@angular/core';
import { ProductFacadeInterface } from './product-facade.interface';
import {select, Store} from '@ngrx/store';
import { ProductListAction } from '../actions/product-list-action';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
import { ProductCreateAction } from '../actions/product-create-action';
import * as uuid from 'uuid';
import { ProductUpdateAction } from '../actions/product-update-action';
import { ProductDeleteAction } from '../actions/product-delete-action';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService implements ProductFacadeInterface  {

  productList$: Observable<Product[]>;
  inProgress$: Observable<boolean>;
  
  constructor(private store$: Store<any>) {
    this.productList$ = this.store$.pipe(
      select((state: any) => {
        return state.product.productList;
      })
    );

    this.inProgress$ = this.store$.pipe(
      select(state => state.Product.inProgress)
    );
  }

  getProductList() {
    this.store$.dispatch(new ProductListAction());
  }

  productOperation(objProduct: Product) {
      if (objProduct.id === '') {
        objProduct.id = uuid.v4();
        this.createProduct(objProduct);
      } else {
        this.updateProduct(objProduct);
      }
  }

  createProduct(objProduct: Product) {
    this.store$.dispatch(new ProductCreateAction(objProduct));
  }

  deleteProduct(objProduct: Product) {
    this.store$.dispatch(new ProductDeleteAction(objProduct));
  }

  updateProduct(objProduct: Product) {
    this.store$.dispatch(new ProductUpdateAction(objProduct));
  }
}

import { Injectable, Inject } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ProductActions, ProductActionType } from '../actions/product-action-type.enum';
import { Store, select } from '@ngrx/store';
import { withLatestFrom, map, catchError, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { ProductInterface } from '../services/product.interface';
import { ProductMapperService } from '../services/mapper/product-mapper.service';
import { ProductCreateAction } from '../actions/product-create-action';
import { ProductUpdateAction } from '../actions/product-update-action';
import { Product } from '../models/product.model';
import { ProductDeleteAction } from '../actions/product-delete-action';
import { ProductRefreshAction } from '../actions/product-refresh-action';
import { ProductListDoneAction } from '../actions/product-list-done-action';
import { ProductListAction } from '../actions/product-list-action';

@Injectable({
    providedIn: 'root'
  })
  export class ProductEffects {
    public static CLASS_NAME = 'Productffects';
    constructor(
      private actions$: Actions<ProductActions>, 
      private store$: Store<any>,
      @Inject(ProductService) private productService: ProductInterface, 
      private productMapper: ProductMapperService) {
      }


    @Effect()
    performProductList$: Observable<ProductListDoneAction> = this.actions$.pipe(
      ofType(ProductActionType[ProductActionType.PRODUCT_LIST]),
      switchMap((action) => {
        return this.productService.getProductList().pipe(
          map((response: any) => {
            return new ProductListDoneAction(this.productMapper.map(response.productList));
          }),
          catchError(error => {
            return of(new ProductListDoneAction(null));
          })
        );
      })
    );

    @Effect()
    performProductCreate$: Observable<ProductRefreshAction> = this.actions$.pipe(
      ofType(ProductActionType[ProductActionType.PRODUCT_CREATE]),
      withLatestFrom(
        this.store$.pipe(select((state) => state.product.productList))
           ),
      switchMap(([action, productList]) => {
        return this.productService.createProduct((action as ProductCreateAction).product)
        .pipe(
          map(product => {
            const arr = [];
            arr.push(product);
            productList = [...arr, ...productList];
            return new ProductRefreshAction(this.productMapper.map(productList));
          }),
          catchError((error, caught) => {
            return of(new ProductRefreshAction(null));
          })
        );
      })
    );

    @Effect()
    performProductUpdate$: Observable<ProductRefreshAction> = this.actions$.pipe(
      ofType(ProductActionType[ProductActionType.PRODUCT_UPDATE]),
      withLatestFrom(
        this.store$.pipe(select((state) => state.product.productList))
      ),
      switchMap(([action, productList]) => {
        return this.productService.updateProduct((action as ProductUpdateAction).product)
        .pipe(
          map((product: Product) => {
            productList = productList.map(prod=>{
              return (prod.id=== product.id) ? product : prod;
            })
            return new ProductRefreshAction(productList);
          }),
          catchError((error, caught) => {
            return of(new ProductRefreshAction(null));
          })
        );
      })
    );

    @Effect()
    performProductDelete$: Observable<ProductRefreshAction> = this.actions$.pipe(
      ofType(ProductActionType[ProductActionType.PRODUCT_DELETE]),
        withLatestFrom(
          this.store$.pipe(select((state) => state.product.productList))
        ),
      switchMap(([action, productList]) => {
        return this.productService.deleteProduct((action as ProductDeleteAction).product)
        .pipe(
          map((product: Product) => {
            console.log(product);
            productList = productList.filter(cat => cat.id !== product.id);
            return new ProductRefreshAction(this.productMapper.map(productList));
          }),
          catchError((error, caught) => {
            return of(new ProductRefreshAction(null));
          })
        );
      })
    );
  }

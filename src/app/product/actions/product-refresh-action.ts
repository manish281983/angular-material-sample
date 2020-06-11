import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';
import { Product } from '../models/product.model';

export class ProductRefreshAction implements Action {
    public type = String(ProductActionType.PRODUCT_REFRESH);
    constructor(public productList: Product[]) {}
}

import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';
import { Product } from '../models/product.model';

export class ProductListDoneAction implements Action {
    public type = String(ProductActionType.PRODUCT_LIST_DONE);
    constructor(public productList: Product[]) {}
}

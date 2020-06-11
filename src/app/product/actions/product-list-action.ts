import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';

export class ProductListAction implements Action {
    public type = String(ProductActionType.PRODUCT_LIST);
    constructor() {}
}

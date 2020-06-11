import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';
import { Product } from '../models/product.model';

export class ProductCreateAction implements Action {
    public type = String(ProductActionType.PRODUCT_CREATE);
    constructor(public product: Product) {
    }
}

import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';
import { Product } from '../models/product.model';

export class ProductDeleteAction implements Action {
    public type = String(ProductActionType.PRODUCT_DELETE);
    constructor(public product: Product) {}
}

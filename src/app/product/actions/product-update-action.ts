import { Action } from '@ngrx/store';
import { ProductActionType } from './product-action-type.enum';
import { Product } from '../models/product.model';

export class ProductUpdateAction implements Action {
    public type = String(ProductActionType.PRODUCT_UPDATE);
    constructor(public product: Product) {}
}

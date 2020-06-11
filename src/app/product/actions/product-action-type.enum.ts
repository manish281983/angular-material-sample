import { ProductListAction } from './product-list-action';
import { ProductCreateAction } from './product-create-action';
import { ProductUpdateAction } from './product-update-action';
import { ProductDeleteAction } from './product-delete-action';
import { ProductRefreshAction } from './product-refresh-action';
import { ProductListDoneAction } from './product-list-done-action';

export enum ProductActionType {
    PRODUCT_LIST = 'PRODUCT_LIST',
    PRODUCT_LIST_DONE = 'PRODUCT_LIST_DONE',
    PRODUCT_CREATE = 'PRODUCT_CREATE',
    PRODUCT_UPDATE = 'PRODUCT_UPDATE',
    PRODUCT_DELETE = 'PRODUCT_DELETE',
    PRODUCT_REFRESH = 'PRODUCT_REFRESH'
}

export type ProductActions =
    ProductListAction |
    ProductListDoneAction |
    ProductCreateAction |
    ProductUpdateAction |
    ProductDeleteAction |
    ProductRefreshAction;

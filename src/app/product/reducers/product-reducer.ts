import { ProductState } from './product-state';
import { ProductActions, ProductActionType } from '../actions/product-action-type.enum';
import { ProductRefreshAction } from '../actions/product-refresh-action';
import { ProductListDoneAction } from '../actions/product-list-done-action';

const initialState = <ProductState> {
   productList: null,
   inProgress: false
};

export function productReducers(state: ProductState = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionType.PRODUCT_LIST:
            return {
                ...state,
                inProgress: true
            };
        case ProductActionType.PRODUCT_REFRESH:
            return {
                ...state,
                inProgress: false,
                productList: (action as ProductRefreshAction).productList
            };
        case ProductActionType.PRODUCT_LIST_DONE:
            return {
                ...state,
                inProgress: false,
                productList: (action as ProductListDoneAction).productList
            };
        default:
            return {
                ...state
            };
    }
}

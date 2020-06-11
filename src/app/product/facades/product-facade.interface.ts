import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface ProductFacadeInterface {
    inProgress$: Observable<boolean>;
    productList$: Observable<Product[]>;
 
    getProductList();
}

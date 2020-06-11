import { Product } from '../models/product.model';

export interface ProductState {
   productList: Product[];
   inProgress: boolean;
}

import { Product } from '../models/product.model';

export interface ProductInterface {
    getProductList();
    createProduct(product: Product);
    updateProduct(product: Product);
    deleteProduct(product: Product);
}

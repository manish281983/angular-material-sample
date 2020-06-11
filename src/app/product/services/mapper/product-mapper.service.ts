import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService  {

  constructor() { }

  map(list: any): Product[] {
    return list.map(product => {
      return {
        name: product.name,
        id: product.id,
        deleted: product.deleted,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        subDescription: product.subDescription,
        discount: product.discount,
        featureProduct: product.featureProduct,
        unavailable: product.unavailable
      };
    });
  }

  updateMap(list: any): Product[] {
    return list.map(product => {
      return {
        name: product.name,
        id: product.id,
        deleted: product.deleted,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        subDescription: product.subDescription,
        discount: product.discount,
        featureProduct: product.featureProduct,
        unavailable: product.unavailable
      };
    });
  }


}

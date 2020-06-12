import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { ProductFacadeService } from '../../product/facades/product-facade.service';
import { ProductService } from '../../product/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../product/models/product.model';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'quantity', 'discount', 'featureProduct', 'unavailable', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('closeProductModal') closeProductModal: ElementRef;
  selectedProduct: Product;
  displayProductList: Product[];
  
  productList$: Observable<Product[]>;
  public inProgress$: Observable<boolean>;

  constructor( private titleService: Title, private productFacadeService: ProductFacadeService , private route: ActivatedRoute) {
    this.inProgress$ = this.productFacadeService.inProgress$;
    this.productList$ = this.productFacadeService.productList$;
      this.titleService.setTitle('Product');
  }

  reloadProducts() {
    this.productFacadeService.getProductList();
  }

  ngOnInit() {
    this.clearSelectedProduct();
    this.reloadProducts();
    this.productFacadeService.productList$.subscribe((productList: Product[]) => {
      if (productList) {
        this.displayProductList = JSON.parse(JSON.stringify(productList));
        this.dataSource = new MatTableDataSource(this.displayProductList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  saveClick() {
    if ((this.selectedProduct.name !== '') && 
    (this.selectedProduct.price !== '') &&
    (this.selectedProduct.quantity !== '')) {
        this.productFacadeService.productOperation(this.selectedProduct);
    }
    this.closeProductModal.nativeElement.click();
  }

  OpenProductDataModel(product?: Product) {
    this.clearSelectedProduct();
    if (product) {
      this.selectedProduct = JSON.parse(JSON.stringify(product));
    }
  }

  deleteDataModel(product: Product) {
    this.productFacadeService.deleteProduct(product);
  }

  clearSelectedProduct() {
    this.selectedProduct = {
      name: '',
      id: '',
      deleted: false,
      description: '',
      price: '',
      quantity: '',
      subDescription: '',
      featureProduct: false,
      discount: '',
      unavailable: false
    };
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  unavailableProductAction(event: MatCheckboxChange, product: Product) {
    product.unavailable = event.checked;
  }
  featureProductAction(event: MatCheckboxChange, product: Product) {
    product.featureProduct = event.checked;
  }

  featureDiscountAction(eventValue: any, product: Product) {
    product.discount = eventValue;
  }

  featureQuantityAction(eventValue: any, product: Product) {
    product.quantity = eventValue;
  }

  featurePriceAction(eventValue: any, product: Product) {
    product.price = eventValue;
  }
}

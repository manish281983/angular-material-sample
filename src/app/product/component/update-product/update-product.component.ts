import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductFacadeService } from '../../facades/product-facade.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  @Input() selectedProduct: any;
  @ViewChild('closeProductModal') closeProductModal: ElementRef;

  constructor(private productFacadeService: ProductFacadeService ) { }

  ngOnInit() {
  }

  saveClick() {
    if (this.selectedProduct.name !== '') {
        this.productFacadeService.productOperation(this.selectedProduct);
    }
    this.closeProductModal.nativeElement.click();
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ProductComponent } from './component/product.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product-effect';
import { StoreModule } from '@ngrx/store';
import { productReducers } from './reducers/product-reducer';

const routes: Routes = [
    {path: '', component: ProductComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        ProductComponent,
        UpdateProductComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        EffectsModule.forFeature([
            ProductEffects
        ]),
        StoreModule.forFeature('product', productReducers),
    ],
    providers: [
    ],
})

export class ProductModule {
}

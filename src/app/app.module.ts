import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/component/header-component.component';
import { ProductComponent } from './product/component/product.component';
import { APP_CONFIG } from './core/data-config-key';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { ProductEffects } from './product/effects/product-effect';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { productReducers } from './product/reducers/product-reducer';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UpdateProductComponent } from './product/component/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('product', productReducers),
    EffectsModule.forFeature([
      ProductEffects
  ]),
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  InfiniteScrollModule,
  MatAutocompleteModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment.APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

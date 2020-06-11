import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/component/product.component';

const routes: Routes = [ 
  { path: 'product', component: ProductComponent },
  { path: '',   redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

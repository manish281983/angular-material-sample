import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { 
    path: 'product', 
    loadChildren: './product/product.module#ProductModule',
    pathMatch: 'full',
  },
  { 
    path: 'tictactoe', 
    loadChildren: './games/games.module#GamesModule',
    pathMatch: 'full',
  },
  { 
    path: 'login', 
    loadChildren: './social/social.module#SocialModule',
    pathMatch: 'full',
  },
  { 
    path: 'charts', 
    loadChildren: './charts/chart.module#ChartModule',
    pathMatch: 'full',
  },
  //{ path: 'product', component: ProductComponent },
  { path: '',   redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

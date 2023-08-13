import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (exports) => exports.ProductDetailsModule
      ),
    title: 'Product',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (exports) => exports.ProductsModule
      ),
    title: 'Products',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  // {
  //   path: '**',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

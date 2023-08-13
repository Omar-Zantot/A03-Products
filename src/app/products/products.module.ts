import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsRoutingModule.components],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsRoutingModule } from './product-details-routing.module';

@NgModule({
  declarations: [ProductDetailsRoutingModule.components],
  imports: [SharedModule, ProductDetailsRoutingModule],
})
export class ProductDetailsModule {}



import { Component, Input } from '@angular/core';
import { ProductModel } from '../products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductModel;
}

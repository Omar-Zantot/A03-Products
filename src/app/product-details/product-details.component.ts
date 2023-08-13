import { Component, OnInit, inject } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductModel } from '../products/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  /** first way to get data */

  // private activatedRoute = inject(ActivatedRoute);
  // protected product$ = inject(ProductDetailsService).getProductDetails$(
  //   this.activatedRoute.snapshot.params?.['id']
  // );

  /** another way to get data */
  protected product$!: Observable<ProductModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    // we can manually subscribe to observables or use async pipe implemented by angular team
    this.product$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        return this.productDetailsService.getProductDetails$(params?.['id']);
      })
    );
  }
}

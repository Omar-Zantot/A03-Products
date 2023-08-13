import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit,OnDestroy {
  protected data?: ProductsModel;
  private destroy = new Subject();
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getProductsList$()
    .pipe(takeUntil(this.destroy))
    .subscribe({
      next: (data) => {
        this.data = data;

      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}

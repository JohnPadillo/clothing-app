import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((product) => {
      this.product = product;
    });
  }

  ngOnInit(): void {}
}

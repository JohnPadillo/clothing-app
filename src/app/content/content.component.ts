import { CartService } from './../services/cart.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input()
  product: any;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    this.snackBar.open('Please select a size', '', {
      duration: 2000,
    });
  }

  selectedSize = 0;

  ngOnInit(): void {}

  addToCart() {
    if (!this.selectedSize) {
      this.openSnackBar();
    }

    const item = {
      ...this.product,
      size: this.selectedSize,
      quantity: 1,
    };

    this.cartService.addItemToCart(item);
  }

  selectSize(sizeId: number) {
    this.selectedSize = sizeId;
  }
}

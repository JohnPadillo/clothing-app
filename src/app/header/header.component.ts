import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart$: Observable<any>;

  isCartOnView = false;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit(): void {}

  get itemCount() {
    return this.cartService.cartCount;
  }

  viewCart() {
    this.isCartOnView = !this.isCartOnView;
  }

  getSize(sizeId: number) {
    switch (sizeId) {
      case 1:
        return 'Small';

      case 2:
        return 'Medium';
      default:
        return 'Large';
    }
  }
}

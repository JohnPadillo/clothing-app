import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartCount = 0;
  cart = new BehaviorSubject<any>([]);

  cart$: Observable<any>;

  constructor() {
    this.cart$ = this.cart.asObservable();
  }

  addItemToCart(item: any) {
    // Increment count
    this.cartCount++;

    const exist = this.cart.value.find((i: any) => {
      return i.size === item.size;
    });

    if (exist) {
      const newCartItems = this.cart.value?.map((_item: any) => {
        if (_item.size === item.size) {
          _item.quantity += 1;
        }

        return _item;
      });

      this.cart.next(newCartItems);
    } else {
      this.cart.next([...this.cart.value, item]);
    }
  }
}

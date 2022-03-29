import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { products } from '../products';
import { ProductView } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  notifyArguments(productName: string) {
    window.alert(`You will be notified when the product '${productName}' goes on sale`);
  }

  notifyArgumentsJson(product: ProductView) {
    const productPrice = this.currencyPipe.transform(product.price, 'USD');

    window.alert(`You will be notified when the product '${product.name}' (${productPrice}) goes on sale`);
  }
}

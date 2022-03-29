import { Component } from '@angular/core';

import { products } from '../products';
import { ProductView } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

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
    window.alert(`You will be notified when the product '${product.name}' (${product.price}) goes on sale`);
  }
}

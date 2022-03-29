import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';
import { ProductView } from '../models/product.interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  @Output() notifyArguments = new EventEmitter<string>();
  @Output() notifyArgumentsJson = new EventEmitter<ProductView>();

  sendProductInfo() {
    this.notifyArgumentsJson.emit({
        name: this.product?.name ?? '',
        price: this.product?.price ?? -1
    });
  }
}

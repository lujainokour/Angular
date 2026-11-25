import { Component, input, output, signal } from '@angular/core';

export interface CartItem {
  productName: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetails {
  ProductName = input.required<string>();
  Description = input.required<string>();
  Price = input.required<number>();
  IsAvailable = input.required<boolean>();

  productAdded = output<CartItem>();

  Quantity = signal(1);

  increaseQuantity() {
    this.Quantity.update(value => value + 1);
  }

  decreaseQuantity() {
    if (this.Quantity() > 1) {
      this.Quantity.update(value => value - 1);
    }
  }

  addToCart() {
    this.productAdded.emit({
      productName: this.ProductName(),
      quantity: this.Quantity(),
      price: this.Price(),
    });
  }
}

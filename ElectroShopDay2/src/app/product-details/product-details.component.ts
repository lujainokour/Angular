import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetails {
  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'https://png.pngtree.com/thumb_back/fw800/background/20240209/pngtree-laptop-with-empty-mockup-screen-on-a-wooden-table-image_15616270.jpg';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

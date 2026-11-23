
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

  
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'JD';

  
  productNames: string[] = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smart Watch',
    'Keyboard'
  ];

  productPrices: number[] = [
    750,
    450,
    80,
    120,
    45
  ];

  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop'
  };

  // Part 4: Store Status
  storeStatus: string = '';

  // Part 5: Product Price Information
  discountPercentage: number = 10;
  finalPrice: number = 0;

  // Part 6: Store Summary
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalProductsValue: number = 0;

  constructor() {

    // Part 4: Check Store Status
    if (this.isStoreOpen) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    // Part 5: Calculate Discount
    if (this.discountPercentage > 0) {
      this.finalPrice = this.featuredProduct.price -
        (this.featuredProduct.price * this.discountPercentage / 100);
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    // Part 6: Calculate Total Products
    this.totalProducts = this.productNames.length;

    // Set initial highest and lowest prices
    if (this.productPrices.length > 0) {
      this.highestPrice = this.productPrices[0];
      this.lowestPrice = this.productPrices[0];
    }

    // Loop through product prices
    for (let i = 0; i < this.productPrices.length; i++) {

      let price = this.productPrices[i];

      // Calculate total value
      this.totalProductsValue += price;

      // Find highest price
      if (price > this.highestPrice) {
        this.highestPrice = price;
      }

      // Find lowest price
      if (price < this.lowestPrice) {
        this.lowestPrice = price;
      }

    }

  }

}

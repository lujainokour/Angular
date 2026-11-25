import { Component, signal } from '@angular/core';
import { CartItem } from './product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ElectroShop-Day3');

  protected readonly ProductName = signal('Laptop');
  protected readonly Description = signal('Dell Laptop, Core i7, 16GB RAM');
  protected readonly Price = signal(850);
  protected readonly IsAvailable = signal(true);

  protected readonly CartProductName = signal('');
  protected readonly CartQuantity = signal(0);
  protected readonly CartPrice = signal(0);

  protected showLaptop() {
    this.ProductName.set('Laptop');
    this.Description.set('Dell Laptop, Core i7, 16GB RAM');
    this.Price.set(850);
    this.IsAvailable.set(true);
  }

  protected showHeadphones() {
    this.ProductName.set('Wireless Headphones');
    this.Description.set('Bluetooth Headphones');
    this.Price.set(120);
    this.IsAvailable.set(true);
  }

  protected receiveProduct(item: CartItem) {
    this.CartProductName.set(item.productName);
    this.CartQuantity.set(item.quantity);
    this.CartPrice.set(item.price);
  }
}

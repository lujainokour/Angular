import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.component.css',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCart {
  ProductName = input<string>('');
  Price = input<number>(0);
  Quantity = input<number>(0);

  TotalPrice = computed(() => this.Price() * this.Quantity());
}

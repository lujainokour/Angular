import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.component.css',
  templateUrl: './product-list.component.html',
})
export class ProductList {
  products = [
    { name: 'Laptop', description: 'High-performance laptop', price: 750, image: 'https://png.pngtree.com/thumb_back/fw800/background/20240209/pngtree-laptop-with-empty-mockup-screen-on-a-wooden-table-image_15616270.jpg', isAvailable: true },
    { name: 'Smartphone', description: 'Latest smartphone', price: 450, image: 'https://www.xiaomitoday.it/wp-content/uploads/2023/08/mercato-smartphone-in-calo.webp', isAvailable: true },
    { name: 'Headphones', description: 'Wireless headphones', price: 80, image: 'https://m.media-amazon.com/images/I/61FvoVoi8KL._AC_SL1500_.jpg', isAvailable: true },
    { name: 'Smart Watch', description: 'Smart fitness watch', price: 120, image: 'https://th.bing.com/th/id/R.6cf8c4dc8bc1c2bba3b9e4c93d84fdcc?rik=ZSpQQn7WYqCXzA&pid=ImgRaw&r=0', isAvailable: true },
    { name: 'Keyboard', description: 'Mechanical keyboard', price: 45, image: 'https://img.freepik.com/premium-photo/closeup-mechanical-keyboard-with-customizable-rgb-backlighting_1327465-47276.jpg', isAvailable: false },
  ];

  buyNow(productName: string): void {
    alert('You bought ' + productName + '!');
  }
}

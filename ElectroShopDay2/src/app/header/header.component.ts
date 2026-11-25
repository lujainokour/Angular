import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class Header {
storeName:string='ElectroShop'
welcomeMessage: string = 'Welcome to ElectroShop!';
storeSlogan: string = 'Everything You Need in One Place';
}

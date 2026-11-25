import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.component.css',
  templateUrl: './navbar.component.html',
})
export class Navbar {
  selectedPage: string = 'Home';

  changePage(page: string): void {
    this.selectedPage = page;
  }
}

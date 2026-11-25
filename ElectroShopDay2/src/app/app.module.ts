import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
import { Header } from './header/header.component';
import { Navbar } from './navbar/navbar.component';
import { ProductList } from './product-list/product-list.component';
import { ProductDetails } from './product-details/product-details.component';
import { Footer } from './footer/footer.component';

@NgModule({
  declarations: [App, Header, Navbar, ProductList, ProductDetails, Footer],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {
}

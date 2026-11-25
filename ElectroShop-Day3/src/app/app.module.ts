import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { ProductDetails } from './product-details/product-details.component';
import { ShoppingCart } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [App, ProductDetails, ShoppingCart],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}

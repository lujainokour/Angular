import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { Product } from './product/product.component';
import { Header } from './header/header.component';
import { Lujain } from './lujain/lujain.component';
import { Hedar } from './hedar/hedar.component';

@NgModule({
  declarations: [App, Product, Header, Lujain, Hedar],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}

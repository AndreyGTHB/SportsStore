import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {StoreComponent} from './store.component';
import {CounterDirective} from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [CounterDirective, StoreComponent, CartSummaryComponent, CartDetailComponent],
  exports: [StoreComponent]
})
export class StoreModule { }

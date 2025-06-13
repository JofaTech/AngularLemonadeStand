import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from "./cart-item/cart-item";
import { NgFor, CurrencyPipe } from '@angular/common';

interface LemonadeObject {
  lemonJuice: number;
  sugar: number;
  iceCubes: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  imports: [CartItem, NgFor, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  @Input() lemonades: LemonadeObject[] = [];
  
  totalPrice: number = 0;

  ngOnInit(): void {
    this.lemonades.forEach(
      (lemonade) => (this.totalPrice = this.totalPrice + lemonade.price)
    );
  }

}

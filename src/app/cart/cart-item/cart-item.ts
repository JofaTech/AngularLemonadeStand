import { Component, Input } from '@angular/core';
import { Glass } from "../../lemonade/glass/glass";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [Glass, CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CartItem {

  @Input() lemonade: any;

}

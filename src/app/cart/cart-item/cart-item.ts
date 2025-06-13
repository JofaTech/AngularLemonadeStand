import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() passLemonadeEvent = new EventEmitter<number>();

  passLemonadeId(removedLemonadeId: number) {
    this.passLemonadeEvent.emit(removedLemonadeId);
  }

  constructor() { }

  ngOnInit(): void { }

}

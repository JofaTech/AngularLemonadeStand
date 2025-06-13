import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  imports: [NgIf],
  templateUrl: './cart-icon.html',
  styleUrl: './cart-icon.css'
})
export class CartIcon {

  cartCount: number = 4;

}

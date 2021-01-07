import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-cart-page',
  templateUrl: './product-cart-page.component.html',
  styleUrls: ['./product-cart-page.component.css']
})
export class ProductCartPageComponent implements OnInit {

  items: CartItemModel[] = [];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    const cartItems = this.cartService.getCart();
    this.items = cartItems.items;
  }

}

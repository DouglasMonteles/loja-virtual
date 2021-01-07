import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private storage: StorageService,
  ) { }

  createOrClearCart(): CartModel {
    const cart: CartModel = { items: [] };
    this.storage.setCart(cart);
    return cart;
  }

  getCart(): CartModel {
    const cart: CartModel = this.storage.getCart();
    return (cart === null) ? this.createOrClearCart() : cart;
  }

  addProduto(produto: ProductModel): CartModel {
    const cart = this.getCart();
    const index = cart.items.findIndex(prod => prod.produto.id === produto.id); // retorna o index no array ou -1 caso não exista

    if (index === -1) {
      cart.items.push({ produto, quatidade: 1 });
    }

    this.storage.setCart(cart);
    return cart;
  }

}

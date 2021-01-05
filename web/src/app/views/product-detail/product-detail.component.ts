import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel = {
    id: 0,
    nome: 'Teste',
    preco: 20.00,
    imgPath: null,
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  voltar(): void {
    this.router.navigateByUrl('/products-page');
  }

}

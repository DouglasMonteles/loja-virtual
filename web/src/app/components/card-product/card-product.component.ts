import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() {}

  ngOnInit(): void {
  }

  productDetail(id: number) {
    console.log(`Detalhes do produto com id = ${id}`);
  }

}

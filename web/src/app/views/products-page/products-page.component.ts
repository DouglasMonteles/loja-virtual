import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Computador',
      price: 2000.00,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 2,
      name: 'Computador',
      price: 2000.00,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 3,
      name: 'Computador',
      price: 2000.00,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 4,
      name: 'Computador',
      price: 2000.00,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 5,
      name: 'Computador',
      price: 2000.00,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
  }

  handleProductByCategory(id: number): void {
    console.log('Id da categoria: ' + id);
  }

}

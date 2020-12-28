import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  categories: CategoriaModel[];

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
    private categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe({
      next: (data) => {
        this.categories = data;
      },

      error: (error) => {}
    });
  }

  handleProductByCategory(id: number): void {
    console.log('Id da categoria: ' + id);
  }

}

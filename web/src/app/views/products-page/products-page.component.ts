import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoryModel } from 'src/app/models/category.model';
import { HandleMessageService } from 'src/app/services/handle-message.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  categories: CategoryModel[];

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
    private handleMessage: HandleMessageService,
    private auth: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.handleRefreshToken();
    this.handleCategories();
  }

  handleRefreshToken(): void {
    this.auth.refreshToken().subscribe({
      next: (data) => {
        this.auth.successfullLogin(data.headers.get('Authorization'));
      },

      error: () => {}
    });
  }

  handleCategories(): void {
    this.categoriaService.findAll().subscribe({
      next: (data) => {
        this.categories = data;
      },

      error: () => this.handleMessage.showMessage('Erro ao carregar as categorias', true)
    });
  }

  handleProductByCategory(id: number): void {
    console.log('Id da categoria: ' + id);
  }

}

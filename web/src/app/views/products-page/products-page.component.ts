import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoryModel } from 'src/app/models/category.model';
import { HandleMessageService } from 'src/app/services/handle-message.service';
import { ProductService } from 'src/app/services/product.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  categories: CategoryModel[];

  products: ProductModel[];

  constructor(
    private categoriaService: CategoriaService,
    private handleMessage: HandleMessageService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.handleCategories();
  }

  handleCategories(): void {
    this.categoriaService.findAll().subscribe({
      next: (data) => {
        this.categories = data;
      },

      error: () => this.handleMessage.showMessage('Erro ao carregar as categorias', true)
    });
  }

  handleProductByCategory(event: EventEmitter<MatTabChangeEvent>): void {
    const categoriaId = (event['index'] + 1);
    this.productService.findByCategoria(categoriaId).subscribe({
      next: (data) => {
        this.products = data['content'];
        this.handleProductImg();
      }
    });
  }

  handleProductImg() {
    this.products.forEach(product => {
      product.imgPath = (product.imgPath === null) ? null : `${environment.baseImageURL}/produtos/picture/${product.imgPath}`;
    });
  }

}

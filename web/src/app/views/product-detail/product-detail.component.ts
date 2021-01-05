import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel = {
    id: null,
    nome: '',
    preco: null,
    imgPath: null,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.findById(id).subscribe({
      next: (data) => {
        this.product = data;
        this.handleProductImg();
      }
    });
  }

  handleProductImg() {
    if (this.product.imgPath !== null) {
      this.product.imgPath = `${environment.baseImageURL}/produtos/picture/${this.product.imgPath}`;
    } else {
      this.product.imgPath = null;
    }
  }

  voltar(): void {
    this.router.navigateByUrl('/products-page');
  }

}

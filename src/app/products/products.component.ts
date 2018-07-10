import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `.remove {
    color: red;
  }
  `],
   providers: [ProductService]
  })
export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  buttonStatus = 'Add to bag';
  addedToBag = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productSelected
    .subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      }
    );
  }

  onCreateItem() {
    this.buttonStatus = 'Remove';
    this.addedToBag = true;
  }
  onDeleteItem() {
    this.buttonStatus = 'Add to bag';
    this.addedToBag = false ;
  }

}

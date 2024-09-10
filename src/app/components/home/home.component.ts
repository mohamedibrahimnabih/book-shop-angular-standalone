import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SelectCategoryComponent,
    ProductComponent,
    ProductListComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories: ICategory[];
  selectedCategoryId: string = '0';
  selectedProducts: { product: IProduct; quantity: number }[] = [];

  constructor() {
    this.categories = [
      { id: 1, name: 'Fiction' },
      { id: 2, name: 'Non-Fiction' },
      { id: 3, name: 'Poetry' },
    ];
  }

  receiveProduct(product: IProduct): void {
    if (product.quantity === 0) {
      return;
    }

    const existingProductInCart = this.selectedProducts.find(
      (p) => p.product.id === product.id
    );

    if (existingProductInCart) {
      existingProductInCart.quantity++;
    } else {
      this.selectedProducts.push({ product: product, quantity: 1 });
    }

    product.quantity--;
  }

  removeProduct(product: IProduct): void {
    const existingProductInCart = this.selectedProducts.find(
      (p) => p.product.id === product.id
    );

    if (existingProductInCart) {
      product.quantity += existingProductInCart.quantity;

      this.selectedProducts = this.selectedProducts.filter(
        (p) => p.product.id !== product.id
      );
    }
  }

  increaseProduct(product: IProduct): void {
    const existingProductInCart = this.selectedProducts.find(
      (p) => p.product.id === product.id
    );

    if (product.quantity > 0) {
      if (existingProductInCart) {
        existingProductInCart.quantity++;
      } else {
        this.selectedProducts.push({ product: product, quantity: 1 });
      }

      product.quantity--;
    }
  }

  decreaseProduct(product: IProduct): void {
    const existingProductInCart = this.selectedProducts.find(
      (p) => p.product.id === product.id
    );

    if (existingProductInCart) {
      if (existingProductInCart.quantity > 1) {
        existingProductInCart.quantity--;
        product.quantity++;
      } else {
        this.removeProduct(product);
      }
    }
  }
}

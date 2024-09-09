import { Component } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { IsbnFormatePipe } from '../../../pipes/isbn-formate.pipe';
import { HighlightProductCartDirective } from '../../../directives/highlight-product-cart.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, IsbnFormatePipe, HighlightProductCartDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: IProduct[];
  // productsFilterd: IProduct[];

  constructor() {
    this.products = [
      { id: 1, title: 'Fortune of Time', author: 'Billy Spark', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies. Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'SWD9999001', price: 90, quantity: 5, imgs: [
        'images/products/product-1/8bf1c7a3-57a4-4e47-a846-28fc1f59be51.jpg',
        'images/products/product-1/63920395-afba-4c0b-b65f-7ca6f62cb80c.jpg'
      ], categoryId: 1 },

      { id: 2, title: 'Dark Skies', author: 'Nancy Hoover', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies. Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'CAW777777701', price: 30, quantity: 1, imgs: [
        'images/products/product-2/5f09f363-6013-417e-a84a-808865b9aa14.jpg',
        'images/products/product-2/da3fd2af-e572-4d73-bd31-bdb988e9f8ad.jpg'
      ], categoryId: 1 },

      { id: 3, title: 'Vanish in the Sunset', author: 'Julian Button', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'RITO5555501', quantity: 0, price: 50, imgs: [
        'images/products/product-3/ff7e61bd-d2fd-447b-ac7a-c3906a4e8016.jpg',
        'images/products/product-3/ae62aceb-85ee-4d03-88d8-6763bb6efa5f.jpg'
      ], categoryId: 2 },

      { id: 4, title: 'Cotton Candy', author: 'Abby Muscles', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'WS3333333301', price: 65, quantity: 2, imgs: [
        'images/products/product-4/b171a0c1-fb9f-495a-913f-5f0de0603387.jpg',
        'images/products/product-4/f573c331-369c-4ef0-97d1-936d5e74c8ec.jpg'
      ], categoryId: 2 },

      { id: 5, title: 'Rock in the Ocean', author: 'Ron Parker', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'SOTJ1111111101', price: 27, quantity: 6, imgs: [
        'images/products/product-5/c0495af5-9fba-44f2-8ab2-41e4fecb4a2f.jpg',
        'images/products/product-5/39ae95ef-d96a-4267-8ad5-b229e16d0914.jpg'
      ], categoryId: 3 },
      
      { id: 6, title: 'Leaves and Wonders', author: 'Laura Phantom', description: 'Praesent vitae sodales libero. Praesent molestie orci augue, vitae euismod velit sollicitudin ac. Praesent vestibulum facilisis nibh ut ultricies.Nunc malesuada viverra ipsum sit amet tincidunt.', isbn: 'FOT000000001', price: 23, quantity: 1, imgs: [
        'images/products/product-6/fddde216-d985-4b92-a78a-67d08aa21731.jpg',
        'images/products/product-6/3440206e-ecda-4d33-a13f-41b7ab4a7f06.jpg'
      ], categoryId: 3 }
    ];

    // this.productsFilterd = this.products;
  }

  // filterProducts(categoryId: string) : void {
  //   if(categoryId.toString() === '0') 
  //     this.productsFilterd = this.products
  //   else 
  //     this.productsFilterd = this.products.filter(p => p.categoryId.toString() === categoryId);
  // }

  // trackByItems(index: number, item: IProduct): number {
  //   return item.id;
  // }
}

import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SelectCategoryComponent } from "./select-category/select-category.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SelectCategoryComponent, ProductComponent, ProductListComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: ICategory[];
  selectedCategoryId: string = '0';

  constructor() {
    this.categories = [
      { id: 1, name: 'Fiction' },
      { id: 2, name: 'Non-Fiction' },
      { id: 3, name: 'Poetry' }
    ];
  }
}

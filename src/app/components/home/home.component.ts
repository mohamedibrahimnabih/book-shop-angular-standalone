import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SelectCategoryComponent } from "./select-category/select-category.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SelectCategoryComponent, ProductComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

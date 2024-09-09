import { Component } from '@angular/core';
import { ICategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {
  categories: ICategory[];
  selectedCategoryId: string = '0';

  constructor() {
    this.categories = [
      { id: 1, name: 'Fiction' },
      { id: 2, name: 'Non-Fiction' },
      { id: 3, name: 'Poetry' }
    ];
  }

  getCategoryName(categoryId: number) : string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}

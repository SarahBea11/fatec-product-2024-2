import { Component } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [
    { id: 1, name: 'Computador', price: 4000, category: 'Eletrônicos' },
    { id: 2, name: 'Celular', price: 3000, category: 'Eletrônicos' },
    { id: 3, name: 'Fone', price: 250.0, category: 'Eletrônicos' },
  ];
}

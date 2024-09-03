import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product';
  products: Product[] = [
    { id: 1, name: 'Computador', price: 4000, category: 'Eletrônicos' },
    { id: 2, name: 'Celular', price: 3000, category: 'Eletrônicos' },
    { id: 3, name: 'Fone', price: 250.0, category: 'Eletrônicos' },
  ];
}

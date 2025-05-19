import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
   selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // <-- aquí
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  productos = [
    {
      nombre: 'Camisa Blanca',
      descripcion: 'Camisa de algodón 100% cómoda y fresca.',
      precio: 29.99,
      imagen: 'https://via.placeholder.com/300x200?text=Camisa+Blanca'
    },
    {
      nombre: 'Pantalón Jeans',
      descripcion: 'Pantalón de mezclilla azul clásico.',
      precio: 49.99,
      imagen: 'https://via.placeholder.com/300x200?text=Jeans'
    },
    {
      nombre: 'Zapatillas Urbanas',
      descripcion: 'Diseño moderno, perfectas para tu día a día.',
      precio: 69.99,
      imagen: 'https://via.placeholder.com/300x200?text=Zapatillas'
    }
  ];

}

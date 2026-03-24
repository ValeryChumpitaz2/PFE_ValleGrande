import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos = [
    { id: 1, nombre: 'Laptop', precio: 2500, disponible: true, imagen: 'https://cdn.mos.cms.futurecdn.net/oAo7NamXYh7KUycm89PNjW.jpg' },
    { id: 2, nombre: 'Mouse', precio: 50, disponible: true, imagen: 'https://tse3.mm.bing.net/th/id/OIP.Ds9Gb1c5qtUEL2wF3cVJvQHaHb?pid=Api&P=0&h=180' },
    { id: 3, nombre: 'Teclado', precio: 120, disponible: false, imagen: 'https://tse4.mm.bing.net/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?pid=Api&P=0&h=180' }
  ];

  carrito: any[] = [];
  seleccionado: any;

  productoSeleccionado(producto: any) {
    if (producto.disponible) {
      this.carrito.push(producto);
      this.seleccionado = producto;
    }
  }
}

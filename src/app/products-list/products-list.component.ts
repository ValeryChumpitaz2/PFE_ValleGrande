import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input() productos: any[] = [];

  @Output() seleccionarProducto = new EventEmitter<any>();

  seleccionar(producto: any) {
    this.seleccionarProducto.emit(producto);
  }

}

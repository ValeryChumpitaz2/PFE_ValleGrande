import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tareas: string[] = ['Estudiar Angular', 'Hacer tarea', 'Comprar comida', 'Lavar ropa'];

  getTareas() {
    return this.tareas;
  }

  agregarTarea(tarea: string) {
    this.tareas.push(tarea);
  }

}
import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  nuevaTarea: string = '';

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar(){
    this.tareaAgregada.emit(this.nuevaTarea);
    this.nuevaTarea = '';
  }

}

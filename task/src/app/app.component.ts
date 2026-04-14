import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  tareas: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tareas = this.taskService.getTareas();
  }

  agregarTarea(tarea: string) {
    this.taskService.agregarTarea(tarea);
  }

}
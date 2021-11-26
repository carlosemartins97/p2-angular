import { Component, OnInit } from '@angular/core';
import { CarlosTasksService } from '../carlos-tasks.service';

@Component({
  selector: 'app-carlos-tasks',
  templateUrl: './carlos-tasks.component.html',
  styleUrls: ['./carlos-tasks.component.css'],
})
export class CarlosTasksComponent implements OnInit {
  taskName: string = '';
  constructor(public taskService: CarlosTasksService) {}

  ngOnInit() {}

  onCreateNewTask() {
    this.taskService.createTask(this.taskName);
  }

  onDeleteTask(index: number) {
    this.taskService.deteleTask(index);
  }
}

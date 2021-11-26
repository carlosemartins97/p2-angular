import { Injectable } from '@angular/core';

interface Task {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarlosTasksService {
  constructor() {}

  tasks: Task[] = [
    { name: 'Ir ao mercado' },
    { name: 'Fazer a janta' },
    { name: 'Lavar a louça' },
  ];

  createTask(name: string) {
    this.tasks.push({ name: name });
  }

  deteleTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

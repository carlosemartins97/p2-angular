import { Component, OnInit } from '@angular/core';
import { CarlosTasksService } from '../carlos-tasks.service';

@Component({
  selector: 'app-carlos-home',
  templateUrl: './carlos-home.component.html',
  styleUrls: ['./carlos-home.component.css'],
})
export class CarlosHomeComponent implements OnInit {
  constructor(public taskService: CarlosTasksService) {}

  ngOnInit() {}
}

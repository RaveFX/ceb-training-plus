import { Component, OnInit } from '@angular/core';
import { Task, TASKS } from './data/tasks-data';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.css'
})
export class WorkbenchComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit() {}
}

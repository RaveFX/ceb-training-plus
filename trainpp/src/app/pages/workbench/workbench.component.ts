import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.css'
})
export class WorkbenchComponent implements OnInit {
  tasks: any[] = [];
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const role = sessionStorage.getItem('role');
    this.taskService.getTaskByRole(role as string).subscribe(
      (response) => {
        this.tasks = response;
        console.log(this.tasks);
      }
    )
  }
}

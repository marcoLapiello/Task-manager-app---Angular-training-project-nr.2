import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  
  isAddingTask = false;

  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  onCloseNewTask() {
    this.isAddingTask = false;
  }
}

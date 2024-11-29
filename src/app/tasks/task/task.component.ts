import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;

  constructor(private tasksService: TaskService) {
    // or with the inject function as a property
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }

}

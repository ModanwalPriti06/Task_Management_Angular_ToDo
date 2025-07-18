import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '../../../services/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { PageTitle } from "../../page-title/page-title";


@Component({
  selector: 'app-all-task',
  imports: [FormsModule, HttpClientModule, DatePipe, PageTitle, CommonModule],
  templateUrl: './all-task.html',
  styleUrl: './all-task.scss'
})
export class AllTask {
  newTask = ''
  taskList: any[] = [];

  ngOnInit() {
    this.getAllTask();
  }

  http = inject(Http)
  addTask() {
    this.http.addTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getAllTask();
    })
  }

  getAllTask() {
    this.http.getAllTask().subscribe((res: any) => {
      this.taskList = res;
    })
  }

    markComplete(task: any) {
    task.completed = true
    this.http.updateTask(task).subscribe(() => {
      // console.log('by', task)
      this.getAllTask();
    })
  }

  markImportant(task: any) {
    task.important = true;
    this.http.updateImportant(task).subscribe(() => {
      // console.log('by', task)
      this.getAllTask();
    })

  }

}

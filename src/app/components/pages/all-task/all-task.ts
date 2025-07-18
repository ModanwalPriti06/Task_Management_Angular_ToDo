import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '../../../services/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PageTitle } from "../../page-title/page-title";
import { State } from '../../../services/state';

@Component({
  selector: 'app-all-task',
  imports: [FormsModule, HttpClientModule, PageTitle, CommonModule],
  templateUrl: './all-task.html',
  styleUrl: './all-task.scss'
})
export class AllTask {
  newTask = ''
  initialTaskList: any[] = [];
  taskList: any[] = [];
  stateService = inject(State)

  ngOnInit() {
    this.getAllTask();
    this.stateService.searchSub.subscribe((val)=>{
      if(val){
        this.taskList = this.initialTaskList.filter(x=> x.title.toLowerCase().includes(val.toLowerCase()))
      } else { 
        this.taskList = this.initialTaskList;
      }
      console.log('search value',val)
    })
    
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
      this.initialTaskList = this.taskList= res;
    })
  }

    markComplete(task: any) {
    task.completed = true
    this.http.updateTask(task).subscribe(() => {
      this.getAllTask();
    })
  }

  markImportant(task: any) {
    task.important = true;
    this.http.updateImportant(task).subscribe(() => {
      this.getAllTask();
    })
  }

}

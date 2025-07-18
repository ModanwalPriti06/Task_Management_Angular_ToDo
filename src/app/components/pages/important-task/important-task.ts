import { Component } from '@angular/core';
import { PageTitle } from "../../page-title/page-title";
import { CommonModule } from '@angular/common';

import { Http } from '../../../services/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-important-task',
  imports: [PageTitle, CommonModule, FormsModule],
  templateUrl: './important-task.html',
  styleUrl: './important-task.scss'
})
export class ImportantTask {
  
    taskList: any[] = [];
  constructor(private http: Http) {}

ngOnInit() {
    this.getAllTask();
  } 
  getAllTask() {
    this.http.getAllTask().subscribe((res: any) => {
      this.taskList = res.filter((item: any)=> item.important === true);
    })
  }
}

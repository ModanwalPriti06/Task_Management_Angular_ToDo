import { Component } from '@angular/core';
import { PageTitle } from "../../page-title/page-title";
import { Http } from '../../../services/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-completed-task',
  imports: [PageTitle, CommonModule, FormsModule],
  templateUrl: './completed-task.html',
  styleUrl: './completed-task.scss'
})
export class CompletedTask {

  taskList: any[] = [];
    constructor(private http: Http) {}
  
  ngOnInit() {
      this.getAllTask();
    } 
    getAllTask() {
      this.http.getAllTask().subscribe((res: any) => {
        this.taskList = res.filter((item: any)=> item.completed === true);
      })
    }
}

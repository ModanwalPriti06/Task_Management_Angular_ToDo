import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http {

  httpClient = inject(HttpClient)

  constructor() { }

  addTask(task: string) {
    return this.httpClient.post("http://localhost:3001/tasks", {
      title: task,
      completed: false
    })
  }

  getAllTask() {
    return this.httpClient.get("http://localhost:3001/tasks")
  }

  updateTask(task: any) {
    return this.httpClient.put("http://localhost:3001/tasks/" + task.id, task)
  }

  updateImportant(task: any) {
    return this.httpClient.put("http://localhost:3001/tasks/" + task.id, task)
  }

}

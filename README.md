<h1>Task Management Project In Angular</h1>

## Create Project

- ng new <project_name>
- choose scss
- N
- ng serve

## Tailwind css

- Go to tailwind css website
- change version 3.4.14 something
- framework guides
- select Angualr
- follow the step for installation tailwind on Angular project

## Create Dummy server on json

- goto npm server and install in your terminal - npm install json-server
- npx json-server db.json (create db.json file like this format and check url - localhost:4200/tasks)

```
    {
    "tasks": [
        { "id": 1, "title": "Finish Node.js project", "completed": false },
        { "id": 2, "title": "Review PRs", "completed": true }
    ]
    }
```

## RouterLink

//app.ts

```
import { Routes } from '@angular/router';
import { AllTask } from './components/pages/all-task/all-task';
import { ImportantTask } from './components/pages/important-task/important-task';
import { CompletedTask } from './components/pages/completed-task/completed-task';

export const routes: Routes = [
    {
        path: "",
        component: AllTask
    },
    {
        path: 'importants',
        component: ImportantTask
    },
    {
        path: 'completed',
        component: CompletedTask
    }
];
```
//app.html this is sidebar section
```
<main class="bg-gray-200 ml-80 min-h-[calc(100vh_-_4rem)] py-8 px-4">
  <router-outlet>
  </router-outlet>
</main>
```

//sidebar.js and add module RouterModule in sidebar.js

```
<aside class="fixed top-16 w-80 shadow-lg border border-gray-300 h-[calc(100vh_-_4rem)]">
  <ul>
    <li [routerLink]="'/'" class="p-4 cursor-pointer" routerLinkActive="bg-green-100 border-1-4 border-green-500">All</li>
    <li [routerLink]="'/importants'" class="p-4 cursor-pointer" routerLinkActive="bg-green-100 border-1-4 border-green-500">Important</li>
    <li [routerLink]="'/completed'"  class="p-4 cursor-pointer" routerLinkActive="bg-green-100 border-1-4 border-green-500">Completed</li>
  </ul>
</aside>
```

## Add task and store Http
- chek the services-> http.ts file
- inject http client
- add server in package.json
- app.config.ts add provideHttpClient()

## handle update and complete task

## add debouncing

```
export class Header {
  searchTerm: string = ''
  searchControl =  new FormControl();

  // @Output() search = new EventEmitter<string>();
  stateService = inject(State)

  ngOnInit(){
    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
      // console.log(value)
      this.stateService.searchSub.next(value || "")
    })
  }
  
}
```
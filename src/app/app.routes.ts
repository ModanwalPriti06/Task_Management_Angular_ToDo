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

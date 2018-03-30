import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';

// a list of objects
const routes: Routes = [
    {
        path: '',
        redirectTo: 'problemes',
        pathMatch: 'full' // exact match
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        // handling random url 
        path: 'new',
        component: NewProblemComponent,
        pathMatch: 'full' // exact match
    },
    {
        path: 'problems/:id',
        component: ProblemDetailComponent
    },
    {
        // handling random url 
        path: '**',
        redirectTo: 'problems'
    }

]

export const routing = RouterModule.forRoot(routes);
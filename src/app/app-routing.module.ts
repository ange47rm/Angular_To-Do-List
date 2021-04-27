import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Step 1 - Import components
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';

// Step 2 - Add routes
const routes: Routes = [
  { path : '', component: TodosComponent},  // path is root in this case
  { path : 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Step 3 - Go to main app.component to add router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosIndexComponent } from './components/todos-index/todos-index.component';

const routes: Routes = [
  { path: '', component: ToDosIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

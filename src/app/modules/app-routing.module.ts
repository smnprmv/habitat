import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../components/grid/grid.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { TodoComponent } from '../components/todo/todo.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'todo',
  component: TodoComponent
}, {
  path: 'layout',
  component: LayoutComponent
}, {
  path: 'grid',
  component: GridComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

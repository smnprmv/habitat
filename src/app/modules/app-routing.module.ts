import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { TodoComponent } from '../components/todo/todo.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'todo',
  component: TodoComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

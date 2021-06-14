import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoList, TodoListType } from 'src/app/classes/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todo!: TodoList

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.todo = this.api.getTodoList()
    console.log(this.todo)
  }

  move(type: TodoListType, index: number) {
    this.todo.moveObjective(index, type)
  }

  addTodo (input: HTMLInputElement) {
    if (input.value.trim() !== '') {
      let object = new Todo(input.value.trim())
      this.todo.current.unshift(object)
      input.value = ''
    }
  }

  get today () {
    let date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
}

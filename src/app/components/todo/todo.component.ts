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

  addTodo (input: HTMLInputElement, hrs: HTMLInputElement, min: HTMLInputElement) {
    let spaceCheck: string[] = [
      input.value.trim(),
      hrs.value.trim(),
      min.value.trim()
    ]

    console.log(spaceCheck)

    if (spaceCheck.includes('')) {
      return
    }

    if (parseInt(hrs.value) < 1 && parseInt(hrs.value) > 24) {
      return
    }
    
    if (parseInt(min.value) > 0 && parseInt(min.value) < 59) {
      let object = new Todo(input.value.trim(), {hours: parseInt(hrs.value), minutes: parseInt(min.value)})
      this.todo.current.unshift(object)
      input.value = min.value = hrs.value = ''
    }
  }

  get today () {
    let date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
}

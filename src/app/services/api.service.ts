import { Injectable } from '@angular/core';
import { Todo, TodoList } from '../classes/todo';
import { JSON, User } from '../classes/user';

const people = {
  vlad: User.fromJSON({
    id: 'vlad',
    name: {
      first: 'Vlad',
      last: 'Simonov'
    },
    birthday: new Date(1994, 8, 29),
    followers: [],
    following: []
  }),
  jeff: User.fromJSON({
    id: 'jeff',
    name: {
      first: 'Jeff',
      last: 'Kaplan'
    },
    birthday: new Date(1972, 10, 4),
    followers: [],
    following: []
  }),
  elon: User.fromJSON({
    id: 'elon',
    name: {
      first: 'Elon',
      last: 'Musk'
    },
    birthday: new Date(1971, 5, 28),
    followers: [],
    following: []
  }),
  bill: User.fromJSON({
    id: 'bill',
    name: {
      first: 'Bill',
      last: 'Gates'
    },
    birthday: new Date(1955, 9, 28),
    followers: [],
    following: []
  }),
  tony: User.fromJSON({
    id: 'tony',
    name: {
      first: 'Tony',
      last: 'Stark'
    },
    birthday: new Date(1970, 4, 29),
    followers: [],
    following: []
  }),
}

const current: Todo[] = [
  Todo.fromJSON({
    objective: 'Read a book',
    checked: false
  }),
  Todo.fromJSON({
    objective: 'Go for a walk',
    checked: false
  }),
  Todo.fromJSON({
    objective: 'Watch a new youtube poop',
    checked: false
  })
]

const completed: Todo[] = [
  Todo.fromJSON({
    objective: 'Walk the dog',
    checked: true
  })
]

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private user: User = User.fromJSON({
    id: 'sam',
    name: {
      first: 'Sam',
      last: 'Pirumov'
    },
    birthday: new Date(1994, 3, 18),
    followers: [
      people.tony,
      people.vlad,
      people.jeff,
      people.elon,
      people.bill
    ],
    following: [
      people.bill,
      people.jeff
    ]
  })

  private todoList: TodoList = TodoList.fromJSON({
    current: current,
    completed: completed
  })

  constructor() {
  }

  getUser () : User {
    return this.user
  }

  getTodoList () : TodoList {
    return this.todoList
  }
}

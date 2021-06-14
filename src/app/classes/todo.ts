export interface TodoJSON {
  objective: string,
  checked: boolean
}

export interface TodoListJSON {
  current: Todo[],
  completed: Todo[]
}

export declare type TodoListType = 'current' | 'completed'

export class TodoList {

  constructor (
    private _current: Todo[],
    private _completed: Todo[]
  ) { }

  static fromJSON (list: TodoListJSON) : TodoList {
    let item = new TodoList(list.current, list.completed)
    return item
  }

  // Метод, который перемещает элемент из одного списка в конец другого списка
  // public moveObjective (index: number, from: TodoListType, to: TodoListType) {
    
  // }

  // get current () : Todo[] {

  // }

  // get completed () : Todo[] {

  // }
}

export class Todo {
  private _checked: boolean = false

  constructor (
    private _objective: string
  ) { }

  set checked (value: boolean) {
    this._checked = value
  }

  static fromJSON (json: TodoJSON) : Todo {
    let todo = new Todo(json.objective)
    todo.checked = json.checked
    return todo
  }
}

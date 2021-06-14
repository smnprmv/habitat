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
  public moveObjective (index: number, to: TodoListType) {
    if (to == 'current') {
      let move = this._completed.splice(index, 1)
      this._current.push(...move)
    }
    else {
      let move = this._current.splice(index, 1)
      this._completed.push(...move)
    }
  }

  get current () : Todo[] {
    return this._current
  }

  get completed () : Todo[] {
    return this._completed
  }
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

  get objective () {
    return this._objective
  }
}

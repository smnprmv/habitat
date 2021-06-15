export interface Hours {
  hours: number
  minutes: number
}

export interface TodoJSON {
  objective: string,
  date: Hours,
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
    private _objective: string,
    private _date: Hours
  ) { }

  set checked (value: boolean) {
    this._checked = value
  }

  static fromJSON (json: TodoJSON) : Todo {
    let todo = new Todo(json.objective, json.date)
    todo.checked = json.checked
    return todo
  }

  get objective () {
    return this._objective
  }

  get date () {
    return this._date
  }

  public transfromDate (): string {
    let hours = new String
    let am = true
    let minutes = (this._date.minutes).toString()

    if (this._date.hours >= 13) {
      hours = (this._date.hours - 12).toString()
      am = false
    }
    else if (this._date.hours == 0) {
      hours = (this._date.hours + 12).toString()
    }
    else hours = (this._date.hours).toString()

    return am ? `${hours}:${minutes} AM` : `${hours}:${minutes} PM`
  }
}

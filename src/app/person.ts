
// ${this.age}
export interface Name {
  firstName: string,
  lastName: string
}

export class Person {
  private _name: Name
  age: number
  handsCount: number

  static defaultHandsCount: number = 2

  constructor (
    _name: Name,
    _age: number,
    _handsCount: number
  ) {
    this._name = _name
    this.age = _age
    this.handsCount = _handsCount
  }

  getTextAge () : string {
    return `${this.age} years`
  }

  static getDefaultHandsCount () {
    return `${this.defaultHandsCount} hands`
  }

  get name () {
    return this._name
  }

  set name (value: Name) {
    this._name = value
  }
}

// Создать класс Cat, у которого будут поля "имя" (приватное, только для чтения),
// "средняя продолжительность жизни", "это мальчик?",
// "количество пальцев" и два метода: вернуть возраст + 'years', и вернуть пол (M / F)

export class Cat {
    private _name: string
    age: number
    isMale: boolean
    fingerCount: number

    static averageLifeSpan = 10

    constructor (
        _name: string,
        _age: number,
        _isMale: boolean,
        _fingerCount: number
    ) {
        this._name = _name
        this.age = _age
        this.isMale = _isMale
        this.fingerCount = _fingerCount
    }

    get name () {
        return this._name
    }

    getAge () : string {
        return `${this.age} Years`
    }

    getSex () : string {
      return this.isMale ? 'M' : 'F'
    }
}

// let vova = new Person('Vlad')
// Без описания полей, только конструктор
export class Cat2 {
    static averageLifeSpan = 10

    constructor (
        readonly name: string,
        public age: number,
        public isMale: boolean,
        public fingerCount: number
    ) {

    }

    getAge () : string {
        return `${this.age} Years`
    }

    getSex () : string {
      return this.isMale ? 'M' : 'F'
    }
}



export class Animal {

  constructor (
    private _age: number
  ) {}

  get age () {
    return this._age
  }
}

export class Dog extends Animal {
  constructor (
    _age: number
  ) {
    super(_age)
  }
}


export class Cat3 {
    static averageLifeSpan = 10
    static defaultFingerCount : number = 5
    private _fingerCount: number

    constructor (
        private _name: string,
        public age: number,
        public isMale: boolean,
        _fingerCount?: number
    ) {
        this._fingerCount = !_fingerCount ? Cat3.defaultFingerCount : _fingerCount
    }

    get name () {
        return this._name
    }

    set fingerCount (value : number) {
        if (value < Cat3.defaultFingerCount + 3)
            this._fingerCount = value
        else console.log("эээ свыш")
    }

    get fingerCount () : number {
        return this._fingerCount
    }

    getAge () : string {
        return `${this.age} Years`
    }

    getSex () : string {
      return this.isMale ? 'M' : 'F'
    }

    isMoreThanAvgFingers () : boolean {
        return this.fingerCount > Cat3.defaultFingerCount ? true : false
    }

    get fingerDiff () : number {
        return this.fingerCount - Cat3.defaultFingerCount
    }
}
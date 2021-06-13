import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color: string = 'blue'
  fontSize: number = 1
  width: number = 100

  // people: string[] = [
  //   'Konstantin',
  //   'Lepesha',
  //   'FyodorDVN'
  // ]

  people2: Person[] = [
    new Person ({firstName: 'Alex', lastName: 'Nuzhdin'}, 40),
    new Person ({firstName: 'Lepesha', lastName: 'Govnovich'}, 25),
    new Person ({firstName: 'Hyper', lastName: 'Debilno'}, 30),
    new Person ({firstName: 'Strannoe', lastName: 'Povedenie'}, 35)
  ]
 
  constructor () {

  }

  ngOnInit () {
    // for (let i = 0; i < this.people.length; i++)
    //   console.log(this.people[i])

    // for (let person of this.people) {
    //   console.log(person)
    // }
    console.log(this.test())
  }

  sortPeople2 (): void {
    this.people2.sort((a, b) => {return a.age - b.age})
  }

  accentPerson (person: Person) {
    person.accent = !person.accent
  }

  /*
    [9, 6, 3]
    [8, 5, 2]
    [7, 4, 1]
  */

  test () {
    let array = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
    let _array = new Array
    let lng = array[0].length
    for (let i = 0; i < lng; i++){
      let tmpArr = new Array
      for (let x of array) {
        tmpArr.push(x.pop())
      }
      _array.push(tmpArr.reverse()) 
    }
    return _array
  }
}

interface Name {
  firstName: string
  lastName: string
}

export class Person {
  public accent: boolean = false
   constructor ( 
     public name: Name,
     public age: number
   ) {}

   get fullname (): string {
     return `${this.name.firstName} ${this.name.lastName}`
   }

   set fullname (value) {
    let name: string[] = value.replace(/\s+/g, ' ').split(" ")
    switch(name.length) {
      case 0: 
        return
      case 1:
        this.name.firstName = name[0]
        this.name.lastName = ""
        return
      case 2:
      default:
        this.name.firstName = name[0]
        this.name.lastName = name[1]
        return
    }
   }
}
class Animal {
  private _name: string

  constructor (
    name: string
  ) {
    this._name = name
  }

  get name () {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }
}

class Cat extends Animal {

  constructor (
    name: string
  ) {
    super(name)
  }
}

// let vova = new Person({firstName: 'Vova', lastName: 'Putin'}, 85, 3)
// console.log(vova)
// let vasya = new Cat ('Vasya', 8, false, 5)

// // console.log(vasya)
// // console.log(Cat.averageLifeSpan)
// // console.log(vasya.getAge())
// // console.log(vasya.getSex())

// let musya =  new Cat2 ('Musya', 3, true, 6)

// // console.log(musya.name)
// // console.log(Cat.averageLifeSpan)
// // console.log(musya.getAge())
// // console.log(musya.getSex())

// let pisi = new Cat3 ('Pisi', 5, true)
// // console.log(pisi)
// // console.log(pisi.isMoreThanAvgFingers())
// // pisi.fingerCount += 3
// // console.log(pisi.fingerDiff)
// // console.log(Person.getDefaultHandsCount())

// // let text1 = new TextFile3 ('text1', 'Hello world')
// // console.log(text1.size)
// // console.log(text1.appendText(' motherfuckers'))
// // console.log(text1.size)
// // console.log(text1.clearFile())
// // console.log(text1.size)
// // console.log(text1.replaceText('Bye wrold'))
// // console.log(text1)

// let text2 = new TextFile2 ('text.dll', 'Hello')
// console.log(text2)
// console.log(text2.name = 'text.html')
// console.log(text2)
// let text21 = new TextFile2('text', 'Hello')
// console.log(text21)
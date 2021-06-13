/*
  Класс TextFile

  Класс, который описывает текстовый файл в операционной системе. 
  Имеет параметры: название файла, размер (только для чтения, будем считать, что один символ в нашей системе – это 1 байт), 
  расширение (только для чтения, по умолчанию txt), содержание файла (строка, только для чтения).

  Задача, написать несколько вариантов классов

  1. Класс, объект которого создается из названия файла, расширения, и содержания. 
  Размер файла в конструкторе высчитать и присвоить переменной, которая хранит размер файла, размер файла хранить как поле класса;
  2. Класс, объект которого создается из названия файла и его содержания 
  (попробовать расширение файла определять в конструкторе исходя из названия файла), 
  размер файла как и в пункте 1 высчитывать и присваивать полю класса
  3. Класс, объект которого создается из названия файла и его содержания (как в пункте 2), 
  но теперь в классе нельзя хранить размер файла, пусть он будет обычным геттером, который будет каждый раз возвращать нужный размер исходя из содержания
  4. Класс как из пункта 3, но содержание его защищено, 
  то есть нельзя модифицировать (только для чтения) и есть статическое поле, которое возвращает, какое расширение для текстового файла используется по умолчанию.

  У каждого класса реализовать методы:
  appendText (value: string) – добавляет к текущему содержанию текст в конец строки (конкатенация строк), обновляет размер файла (если размер хранится как поле в классе)
  clearFile () - метод, который очищает содержание файла, обновляет размер файла (если размер хранится как поле в классе)
  replaceText (value: string) – заменяет содержание файла на текст, который передается аргументом
*/

import { stringify } from "@angular/compiler/src/util"

// abstract class TextFile {
//   static defaultExtention: string = 'txt'
//   protected _size: number = 0
//   protected _content: string
  
//   constructor(
//     protected name: string,
//     _content: string
//   ){
//     this._content = _content
//   }

//   appendText(value: string) {
//     this._size += value.length
//     this._content = this._content.concat(value)
//   }

//   clearFile() {
//     this._content = ""
//     this._size = 0
//   }

//   replaceText(value: string) {
//     this._content = value
//     this._size = value.length
//   }
// }

// export class TextFile1 extends TextFile {
//   constructor(
//     name: string,
//     _content: string
//   ){
//     super(name, _content)
//     this._size = this.name.length + this._content.length
//   }
  
// }

//Text1
export class TextFile1 {
  static defaultExtention: string = 'txt'
  private _size: number = 0

  constructor(
    public name: string,
    readonly extention: string,
    private _content: string
  ){
    this._size = this.name.length + this._content.length
  }

  get content () {
    return this._content
  }

  get size () {
    return this._size
  }

  appendText(value: string) {
    this._size += value.length
    this._content = this._content.concat(value)
  }

  clearFile() {
    this._content = ""
    this._size = this.name.length
  }

  replaceText(value: string) {
    this._content = value
    this._size = value.length
  }
}

//Text2
export class TextFile2 {
  private _size: number = 0
  static defaultExtention: string = 'txt'

  constructor(
    public name: string,
    private _content: string,
    private extention?: string
  ){
    this._size = this.name.length + this._content.length
    if (this.name.split(".")[1])
      this.extention = this.name.split(".")[1]
    else this.extention = TextFile2.defaultExtention
  }

  get content () {
    return this._content
  }

  get size () {
    return this._size
  }

  appendText(value: string) {
    this._size += value.length
    this._content = this._content.concat(value)
    // this._content += value
  }

  clearFile() {
    this._content = ""
    this._size = 0
  }

  replaceText(value: string) {
    this._content = value
    this._size = value.length
  }
}

//Text3
export class TextFile3 {
  static defaultExtention: string = 'txt'

  constructor(
    public name: string,
    private _content: string,
    private extention?: string
  ){
    if (this.name.split(".")[1])
      this.extention = this.name.split(".")[1]
    else this.extention = TextFile2.defaultExtention
  }

  get content () {
    return this._content
  }

  get size (): number {
    let _size: number = this.name.length + this._content.length
    return _size
  }

  appendText(value: string) {
    this._content = this._content.concat(value)
  }

  clearFile() {
    this._content = ""
  }

  replaceText(value: string) {
    this._content = value
  }
}

//Text4
export class TextFile4 {
  static defaultExtention: string = 'txt'

  constructor(
    public name: string,
    readonly _content: string,
    private extention?: string
  ){
    if (this.name.split(".")[1])
      this.extention = this.name.split(".")[1]
    else this.extention = TextFile2.defaultExtention
  }

  get content () {
    return this._content
  }

  get size (): number {
    let _size: number = this.name.length + this._content.length
    return _size
  }

  // appendText(value: string) {
  //   this._content = this._content.concat(value)
  // }

  // clearFile() {
  //   this._content = ""
  // }

  // replaceText(value: string) {
  //   this._content = value
  // }
}
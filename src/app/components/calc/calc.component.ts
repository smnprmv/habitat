import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  private _ans: string = "0"
  private _memory: number | undefined
  private changer!: number
  private change: boolean = true
  private oper: boolean = false
  public operation: 'multi' | 'divide' | 'sum' | 'substr' | undefined = undefined
  private _history: string = ''

  private sign = {'multi': 'x', 'divide': '/' , 'sum': '+' , 'substr': '-'}

  constructor() { }

  ngOnInit(): void {
  }

  get ans (): string {
    return this._ans
  }

  get history () {
    return this._history
  }

  set ans (value: string) {
    this._ans = value
  }

  clearMem() {
    this._memory = undefined
    this._history = ''
  }

  changeSign () : void {
    this._ans = '-' + this._ans
  }

  addNumber (value: string) :void {
    this._history += value

    this.change = true
    if (this.oper) {
      this._ans = '0'
      this.oper = false
    }

    if (this._ans == '0') {
      this._ans = value
    }
    else {
      this._ans = this._ans + value
    }
  }

  chng (type: 'multi' | 'divide' | 'sum' | 'substr' | undefined) {
    this.operation = type
    if (type != undefined)
      this._history += this.sign[type]

    this.oper = true
    if (this._ans == '0') {
      return
    }
    if (this.change) {
      this.changer = parseFloat(this._ans)
      this.change = false
    }

    if (this._memory == undefined) {
      this._memory = parseFloat(this._ans)
    }
    else {
      switch (this.operation) {
        case 'multi': {
          this._ans = (this._memory * this.changer).toString()
        this._memory = parseFloat(this._ans)
        }
        break

        case 'divide': {
          this._ans = (this._memory / this.changer).toString()
        this._memory = parseFloat(this._ans)
        }
        break

        case 'sum': {
          this._ans = (this._memory + this.changer).toString()
        this._memory = parseFloat(this._ans)
        }
        break

        case 'substr': {
          this._ans = (this._memory - this.changer).toString()
        this._memory = parseFloat(this._ans)
        }
        break
      }
      
    }

  }

  equal () {
    if (this.operation == undefined) {
      return
    }
    this.chng(this.operation)
    this._history = ''
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person!: Person
  edit: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.edit = !this.edit
  }

  applyName(input: HTMLInputElement) {
    this.person.fullname = input.value
    console.log(this.person)
    this.edit = false
  }
}

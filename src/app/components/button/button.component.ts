import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.btnClick.emit()
  }

}
